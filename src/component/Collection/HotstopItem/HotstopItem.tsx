import { useNavigate } from 'react-router-dom'
import { ItemProps } from '../../../types/types'
import classes from './HotstopItem.module.css'

export function HotstopItem({ item }: { item: ItemProps }) {
    const navigate = useNavigate();
    const path = '/products';

    const name = item.title?.toLowerCase().replace(/ /g, '-');

    return (
        <div className={classes.hotstopItem}>
            <img src={item.img} alt={item.title} className={classes.img} />
            <h2 className={classes.text} >{item.title}</h2>
            <p className={classes.price}>{Number(item.price).toFixed(2)} PLN</p>
            <button onClick={()=>{navigate(`${path}/${name}`)}}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M8 4l8 8-8 8" />
                </svg>
            </button>
        </div>
    )
}