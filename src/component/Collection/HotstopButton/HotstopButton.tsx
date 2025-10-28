import { useToggle } from '../../../hooks/useToggle'
import { ItemProps } from '../../../types/types'
import { HotstopItem } from '../HotstopItem/HotstopItem'
import classes from './HotstopButton.module.css'

export function HotstopButton({ top, left, item }: { top: string, left: string, item: ItemProps }) {

    const [visible, toggleVisible] = useToggle(false);

    return (
        <>
            <button className={classes.hotstopButton} style={{ top, left }} onClick={toggleVisible} />
            {visible && <HotstopItem item={item} />}
        </>
    )
}
