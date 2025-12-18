import { CARD_STYLE } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Paw‑prints ",
};

export default function WatchlistItemPage() {
  return (
    <section className={cn(CARD_STYLE, "h-full")}>WatchlistItemPage</section>
  );
}
