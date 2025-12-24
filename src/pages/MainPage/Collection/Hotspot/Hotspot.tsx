import { useToggle } from '../../../../hooks/useToggle';
import { HotspotItem } from './HotspotItem/HotspotItem'
import { HotspotButton } from './HotspotButton/HotspotButton';
import { ProductNotFound } from './ProductNotFound/ProductNotFound';
import { useProductById } from '../../../../hooks/useProductById';

import classes from './Hotspot.module.css'

export function Hotspot({ top, left, productId }: { top: string, left: string, productId: string }) {
    const [visible, toggleVisible] = useToggle(false);
    const { data: product } = useProductById(productId);

    return (
        <>
            <div className={classes.hotspotWrapper} style={{ top, left, position: 'absolute' }}>
                <HotspotButton onClick={toggleVisible} />
                {visible && (product ? (<HotspotItem item={product} />) : (<ProductNotFound />))}
            </div>
        </>
    )
}
