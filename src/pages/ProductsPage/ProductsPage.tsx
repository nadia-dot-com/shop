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

export function ProductsPage() {
    // const { selectedCategory } = useShopContext();
    const { category, itemId } = useParams();
    const normalizedCategory = category ?? ALL;

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!category) {
    //         const path = selectedCategory.toLowerCase();
    //         navigate(path)
    //     }
    // }, [category])

    const { data: products, isLoading, error } = useProducts(normalizedCategory);


    if (isLoading) return <LoadingSpinner />

    if (error) return <ErrorState />

    if (!products) return null;

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