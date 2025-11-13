import { useNavigate } from "react-router-dom";
import { useShopContext } from "../../../../context/ShopContext";
import { PresentationProps } from "../../../../types/shopTypes";
import { cn } from "../../../../utils/cn";
import { Button } from "../../../../component/Button/Button";

import classes from './PresentationItem.module.css'
import { ROUTES } from "../../../../config/Routes";

export function PresentationItem({ array, index, currentItem }: { array: PresentationProps[], index: number, currentItem: PresentationProps }) {
    const { chooseCategory } = useShopContext();
    const navigate = useNavigate();

    const handleClick = (category: string) => {
        navigate(`/${ROUTES.productCategory(category).toLowerCase()}`); chooseCategory(category)
    }

    return array.map((current, i) => (
        <div 
        className={classes.slide}
        key={current.id}
        >
            <img
                src={current.img}
                alt={current.title}
                className={cn(classes.image, i === index && classes.active)}
            />
            <div className={cn(classes.content, i === index && classes.active, i === 0 && classes.contentColor1)}>
                <h1 className={classes.title}>{current.title}</h1>
                <p className={classes.desc}>{current.desc}</p>
                <Button
                    bgColor="white"
                    textColor="black"
                    onClick={() => handleClick(currentItem.category)}
                    text={"• SHOP NOW"}
                />
            </div>
        </div>
    ))
}