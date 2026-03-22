import { ProductItem } from "./ProductItem/ProductItem";
import { Product } from "@/types/api/product";
import classes from "./Products.module.css";

export function Products({ products }: { products: Product[] }) {
  return (
    <div className={classes.products}>
      {products.map((product) => (
        <ProductItem
         key={product.id} product={product} />
      ))}
    </div>
  );
}
