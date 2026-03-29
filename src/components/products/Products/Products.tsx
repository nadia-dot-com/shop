import classes from "./Products.module.scss";
import { ProductItem } from "./ProductItem/ProductItem";
import { Product } from "@/types/api/product";
import { AnimatePresence } from "motion/react";

export function Products({ products }: { products: Product[] }) {
  return (
    <div className={classes.products}>
      <AnimatePresence mode="popLayout">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </AnimatePresence>
    </div>
  );
}
