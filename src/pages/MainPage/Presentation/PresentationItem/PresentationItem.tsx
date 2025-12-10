import { PresentationProps } from "../../../../types/shopTypes";
import { cn } from "../../../../utils/cn";
import { Button } from "../../../../component/Button/Button";

import classes from './PresentationItem.module.css'
import { useShoppingNavigation } from "../../../../hooks/useShoppingNavigation";

export function PresentationItem({ array, index, currentItem }: { array: PresentationProps[], index: number, currentItem: PresentationProps }) {
    const {navigateToCategory} = useShoppingNavigation();

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
                    onClick={() => navigateToCategory(currentItem.category)}
                    text={"• SHOP NOW"}
                />
            </div>
        </div>
    ))
}