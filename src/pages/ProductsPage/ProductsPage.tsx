import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Items } from "./Items/Items";
import { useShopContext } from "../../context/ShopContext";

import classes from './ProductsPage.module.css';
import { cn } from "../../utils/cn";
import { ProductNav } from "../../component/ProductNav/ProductNav";
import { useEffect } from "react";

export function ProductsPage() {
    const { items, selectedCategory } = useShopContext();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        if(!params.category) {
            const path = selectedCategory.toLowerCase();
            navigate(path)
        }
    }, [params.category])

    return (
        <div className={classes.productPage}>
            <ProductNav />
            <div>
                <Outlet />
            </div>
            <div className={cn(classes.itemsContainer, params.itemId && classes.itemPageOpen)}>
                <Items items={items} />
            </div>
        </div>
    )
}