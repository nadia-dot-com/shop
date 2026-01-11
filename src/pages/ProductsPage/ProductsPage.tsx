import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Products } from "../../components/products/Products/Products";
import { useShopContext } from "../../context/ShopContext";
import { cn } from "../../utils/cn";
import { ProductNav } from "../../components/ProductNav/ProductNav";
import { useEffect } from "react";

import classes from './ProductsPage.module.css';
import { useProducts } from "../../hooks/useProducts";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { ErrorState } from "../../components/ErrorState/ErrorState";
import { ALL } from "../../data/categories";
import { ERROR_MESSAGES } from "../../constants/messages";

export function ProductsPage() {
    const { category, itemId } = useParams();
    const normalizedCategory = category ?? ALL;

    const { data: products, isLoading, error } = useProducts(normalizedCategory);

    if (isLoading) return <LoadingSpinner />;

    if (error) return <ErrorState message={ERROR_MESSAGES.GENERIC} />;

    if (!products) return <ErrorState message={ERROR_MESSAGES.NOT_FOUND} />;

    return (
        <div className={classes.productsPage}>
            <ProductNav />
            <div>
                <Outlet />
            </div>
            <div className={cn(classes.productsContainer, itemId && classes.productPageOpen)}>
                <Products products={products} />
            </div>
        </div>
    )
}