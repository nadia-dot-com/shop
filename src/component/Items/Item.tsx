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
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>{price}pln</p>
            <div  className="add-to-cart">+</div>
        </div>
    )
}