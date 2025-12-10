import { Button } from "../../../component/Button/Button"; 
import { SALE } from "../../../data/categories";
import { getImagePath } from "../../../utils/getImagePath";
import { useShoppingNavigation } from "../../../hooks/useShoppingNavigation";

import classes from './Sale.module.css';

export function Sale() {
   const {navigateToCategory} = useShoppingNavigation();

    return (
        <div className={classes.sale}>
           <img 
           className={classes.bg}
           src={getImagePath('img/sale/sale.png')} 
           alt="sale" 
           />
            <h1 className={classes.title}>Spring Sale</h1>
            <h2 className={classes.desc}>Enjoy up to <span style={{ color: 'red' }}>40%</span> off a selection of furniture,
                decor, and more.</h2>
            <Button
                bgColor="#D74F0E"
                textColor="white"
                onClick={()=> navigateToCategory(SALE)}
                text={"• SHOP NOW"}
            />
        </div>
    )
}