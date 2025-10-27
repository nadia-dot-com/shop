import classes from './HotstopButton.module.css'

export function HotstopButton({top, left}: {top: string, left: string }) {
    return <button className={classes.hotstopButton} style={{top, left}} />
}