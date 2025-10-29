import { useNavigate } from "react-router-dom";
import { ShopNowButton } from "../../component/ShopNowButton/ShopNowButton";

import classes from './Sale.module.css';
import { useShopContext } from "../../context/ShopContext";
import { SALE } from "../../data/categories";
import { ROUTES } from "../../config/RouterPath";

export function Sale() {
    const { chooseCategory } = useShopContext();
    const navigate = useNavigate();

    const handleNavigateButton = () => {
        chooseCategory(SALE);
        navigate(ROUTES.sale);
    }
    return (
        <div className={classes.sale}>
            <h1 className={classes.title}>Spring Sale</h1>
            <h2 className={classes.desc}>Enjoy up to <span style={{ color: 'red' }}>40%</span> off a selection of furniture,
                decor, and more.</h2>
            <ShopNowButton bgColor="#D74F0E" textColor="white" onClick={handleNavigateButton} />
        </div>
    )
}