import { useNavigate } from "react-router-dom";

import classes from './PopularCategory.module.css';
import { useShopContext } from "../../../context/ShopContext";
import { CategoryProps } from "../../../types/types";

export function PopularCategory({ category }: { category: CategoryProps }) {
    const { chooseCategory } = useShopContext();
    const navigate = useNavigate();
    const path = '/products'

    const choose = () => {
        chooseCategory(category.category);
        navigate(`${path}`);
    }

    return category && (
        <li className={classes.categoryItem}>
            <img
                src={category.img}
                alt={category.category}
                className={classes.img}
                onClick={() => choose()}
            />
            <div className={classes.title} onClick={() => choose()}>{category.category}</div>
        </li>
    )
}