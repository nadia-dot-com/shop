import { useNavigate } from 'react-router-dom'
import { ItemProps } from '../../../../../types/shopTypes';
import classes from './HotspotItem.module.css'
import { getImagePath } from '../../../../../utils/getImagePath';

export function HotspotItem({ item }: { item: ItemProps }) {
    const navigate = useNavigate();
    const path = '/products';

    const name = item.title?.toLowerCase().replace(/ /g, '-');

    return (
        <div className={classes.hotspotItem} onClick={() => { navigate(`${path}/${name}`) }}>
            <img src={getImagePath(item.img[0])} alt={item.title} className={classes.img} />
            <h2 className={classes.text} >{item.title}
                <p className={classes.price}>{Number(item.price).toFixed(2)} PLN</p>
            </h2>
            <button className={classes.button}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M8 4l8 8-8 8" />
                </svg>
            </button>
        </div>
    )
}