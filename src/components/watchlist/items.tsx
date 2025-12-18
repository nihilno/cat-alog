import { getProducts } from "@/lib/actions/actions";
import Item from "./item";

async function Items() {
  const result = await getProducts();

  return (
    <section className="border-muted-foreground/50 w-full space-y-2 border-t border-dashed px-2 pt-6 md:px-4">
      {!result.success ? (
        <h1>{result.error}</h1>
      ) : result.products.length === 0 ? (
        <h1>Pust</h1>
      ) : (
        result.products.map((product) => (
          <Item key={product.id} product={product} />
        ))
      )}
    </section>
  );
}

export default Items;
