import { Outlet, useParams } from "react-router-dom";
import { Products } from "../../components/products/Products/Products";
import { ProductNav } from "../../components/ProductNav/ProductNav";
import { useProducts } from "../../hooks/products/useProducts";
import { ALL } from "../../data/categories";
import { DataLoader } from "../../components/DataLoader/DataLoader";
import { cn } from "../../utils/cn";
import { useCategoryContext } from "../../context/CategoryContext";

import classes from './ProductsPage.module.css';

export function ProductsPage() {
    const { itemId } = useParams();
    const { selectedCategory } = useCategoryContext();
    const normalizedCategory = selectedCategory ?? ALL;

    const { data: products, isLoading, error } = useProducts(normalizedCategory);

    return (
        <DataLoader
            loading={isLoading}
            loaded={!!products}
            error={error}
        >
            <div className={classes.productsPage}>
                <ProductNav />
                <section>
                    <Outlet />
                </section>
                <section className={cn(classes.productsContainer, itemId && classes.productPageOpen)}>
                    <Products products={products} />
                </section>
            </div>
        </DataLoader>
    )
}