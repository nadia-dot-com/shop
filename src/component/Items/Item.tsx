import { cn } from '../../utils/cn';
import classes from './Item.module.css'

export type ItemProps = {
    id: number;
    title: string;
    img: string;
    desc: string;
    category: string;
    price: string;
}

export function Item(props: ItemProps) {
const { title, img, desc, price} = props;

    return (
        <div className={classes.item}>
            <img src={img} alt={title} className={classes.img} />
            <h2 className={classes.text} >{title}</h2>
            <p className={classes.text}>{desc}</p>
            <p className={classes.price}>{price}pln</p>
            <div  className={cn(classes.addToCard)}>+</div>
        </div>
    )
}