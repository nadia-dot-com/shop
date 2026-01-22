import { Product } from '../../../../../types/api/product';
import { getDiscountPrice } from '../../../../../utils/product';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../../config/Routes';
import { useCategoryContext } from '../../../../../context/CategoryContext';

import classes from './HotspotItem.module.css';

export function HotspotItem({ item }: { item: Product }) {
    const {setSelectedCategory} = useCategoryContext()
    const navigate = useNavigate();

    const handleNavigate = () => {
        const name = item.name?.toLowerCase().replace(/ /g, '-');
        const categorySlug = item.categoryName.toLowerCase().replace(/\s+/g, "-");
        navigate(`/${ROUTES.productCategory(categorySlug).toLowerCase()}/${name}`);
        setSelectedCategory(categorySlug)
    }

    return (
        <div className={classes.hotspotItem} onClick={() => handleNavigate()}>
            <img src={item.imagesUrls[0]} alt={item.name} className={classes.img} />
            <h2 className={classes.text} >{item.name}
                <div className={classes.price}>
                    {item.discount <= 0 ?
                        <p>${Number(item.price).toFixed(2)}</p>
                        : <div>
                            <p className={classes.oldPrice}>${Number(item.price).toFixed(2)}</p>
                            <p className={classes.discountPrice}>${getDiscountPrice(item.price, item.discount)}</p>
                        </div>
                    }
                </div>
            </h2>
            <button className={classes.button}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M8 4l8 8-8 8" />
                </svg>
            </button>
        </div>
    )
}