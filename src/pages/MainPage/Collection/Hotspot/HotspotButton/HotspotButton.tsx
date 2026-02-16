import classes from "./HotspotButton.module.css";

export function HotspotButton({ onClick }: { onClick: () => void }) {
  return <button className={classes.hotspotButton} onClick={onClick} />;
}
