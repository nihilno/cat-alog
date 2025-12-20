import { scrapeProduct } from "@/lib/firecrawl";
import { sendPriceDropAlert } from "@/lib/resend";
import { validateProductUrl } from "@/lib/validateProductUrl";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("Authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );

    const { data, error: productsError } = await supabase
      .from("products")
      .select("id, user_id, url, current_price, currency, name, image_url");

    if (productsError) throw productsError;

    const products: Product[] = data || [];

    for (const product of products) {
      try {
        let safeUrl: string;
        try {
          safeUrl = validateProductUrl(product.url);
        } catch (err) {
          console.error(
            "Skipping product with unsafe URL:",
            product.id,
            product.url,
            err,
          );
          continue;
        }

        const productData = await scrapeProduct(safeUrl);

        if (!productData || !productData.currentPrice) continue;

        const newPrice = productData.currentPrice;
        const oldPrice = product.current_price as number;

        if (newPrice <= 0 || newPrice > 1_000_000) {
          console.error("Unrealistic price for product:", product.id, newPrice);
          continue;
        }

        const { error: updateError } = await supabase
          .from("products")
          .update({
            current_price: newPrice,
            currency: productData.currencyCode || product.currency,
            name: productData.productName || product.name,
            image_url: productData.productImageUrl || product.image_url,
            updated_at: new Date().toISOString(),
          })
          .eq("id", product.id);

        if (updateError) {
          console.error("Error updating product:", product.id, updateError);
          continue;
        }

        if (oldPrice !== newPrice) {
          const { error: historyError } = await supabase
            .from("price_history")
            .insert({
              product_id: product.id,
              price: newPrice,
              currency: productData.currencyCode || product.currency,
              checked_at: new Date().toISOString(),
            });

          if (historyError) {
            console.error(
              "Error inserting price history for product:",
              product.id,
              historyError,
            );
          }

          if (newPrice < oldPrice) {
            const data = await supabase.auth.admin.getUserById(product.user_id);
            const user = data.data.user;

            if (user && user.email) {
              const emailResult = await sendPriceDropAlert(
                user.email,
                product,
                oldPrice,
                newPrice,
              );

              if (!emailResult.success) {
                console.error(
                  "Error sending price drop email:",
                  product.id,
                  emailResult.error,
                );
              }
            }
          }
        }
      } catch (error) {
        console.error("Error processing product:", product.id, error);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Price check completed.",
    });
  } catch (error) {
    console.error("Error in price check cron job:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
