import { Outlet, useParams } from "react-router-dom";
import { Products } from "../../components/products/Products/Products";
import { ProductNav } from "../../components/ProductNav/ProductNav";
import { categoriesGroups } from "../../data/categories";
import { DataLoader } from "../../components/DataLoader/DataLoader";
import { cn } from "../../utils/cn";
import { useCategoryContext } from "../../context/CategoryContext";

import classes from "./ProductsPage.module.css";
import { useInfiniteProducts } from "../../hooks/products/useInfiniteProducts";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../components/ErrorFallback/ErrorFallback";

export default function ProductsPage() {
  const { itemId } = useParams();
  const { selectedCategory } = useCategoryContext();
  const normalizedCategory = selectedCategory ?? categoriesGroups.all;

  const { pages, isLoading, error } = useInfiniteProducts(normalizedCategory);

  const products = pages?.flat() ?? [];

  return (
    <div className={classes.productsPage}>
      <ProductNav />

      <section>
          <Outlet />
      </section>

      <DataLoader loading={isLoading} loaded={!!products.length} error={error}>
        <section
          className={cn(
            classes.productsContainer,
            itemId && classes.productPageOpen,
          )}
        >
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Products products={products} />
          </ErrorBoundary>
        </section>
      </DataLoader>
    </div>
  );
}
