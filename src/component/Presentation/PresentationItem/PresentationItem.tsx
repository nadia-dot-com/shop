import { useNavigate } from "react-router-dom";
import { useShopContext } from "../../../context/ShopContext";
import { PresentationProps } from "../../../types/types";
import { cn } from "../../../utils/cn";
import { Button } from "./Button/Button"; 

import classes from './PresentationItem.module.css'

export function PresentationItem({ array, index, currentItem }: { array: PresentationProps[], index: number, currentItem: PresentationProps }) {
    const { chooseCategory } = useShopContext();
    const navigate = useNavigate();
    const path = '/products';

    return array.map((current, i) => (
        <>
            <img
                key={current.title}
                src={current.img}
                alt={current.title}
                className={cn(classes.image, i === index && classes.active)}
            />
            <div className={cn(classes.content, i === index && classes.active, i === 0 && classes.contentColor1)}>
                <h1 className={classes.title}>{current.title}</h1>
                <p className={classes.desc}>{current.desc}</p>
                <Button className={cn(classes.presentationButton, i === index && classes.active,)} text="• SHOP PRODUCTS" onClick={() => { navigate(path); chooseCategory(currentItem.category) }} />
            </div>
        </>
    ))
}