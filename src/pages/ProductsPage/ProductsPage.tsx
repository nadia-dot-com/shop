import { Outlet, useParams } from "react-router-dom";
import { Products } from "../../components/products/Products/Products";
import { ProductNav } from "../../components/ProductNav/ProductNav";
import { useProducts } from "../../hooks/useProducts";
import { ALL } from "../../data/categories";
import { DataLoader } from "../../components/DataLoader/DataLoader";
import { cn } from "../../utils/cn";

import classes from './ProductsPage.module.css';

export function ProductsPage() {
    const { category, itemId } = useParams();
    const normalizedCategory = category ?? ALL;

    const { data: products, isLoading, error } = useProducts(normalizedCategory);

    return (
        <DataLoader
            loading={isLoading}
            loaded={!!products}
            error={error}
        >
            <div className={classes.productsPage}>
                <ProductNav />
                <div>
                    <Outlet />
                </div>
                <div className={cn(classes.productsContainer, itemId && classes.productPageOpen)}>
                    <Products products={products} />
                </div>
            </div>
        </DataLoader>
    )
}