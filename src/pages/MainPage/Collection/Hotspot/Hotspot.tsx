import { useShopContext } from '../../../../context/ShopContext';
import { useToggle } from '../../../../hooks/useToggle';
import { ItemProps } from '../../../../types/shopTypes';
import { HotspotItem } from './HotspotItem/HotspotItem'
import classes from './Hotspot.module.css'
import { HotspotButton } from './HotspotButton/HotspotButton';
import { ProductNotFound } from './ProductNotFound/ProductNotFound';

export function Hotspot({ top, left, productId }: { top: string, left: string, productId: number }) {
    const [visible, toggleVisible] = useToggle(false);
    const { items } = useShopContext();

    const item: ItemProps | undefined = items.find(i => i.id === productId);

    return (
        <>
            <div className={classes.hotspotWrapper} style={{ top, left, position: 'absolute' }}>
                <HotspotButton onClick={toggleVisible} />
                {visible && (item ? (<HotspotItem item={item} />) : (<ProductNotFound />))}
            </div>
        </>
    )
}
