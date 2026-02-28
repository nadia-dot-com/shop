import Lottie from "lottie-react";
import loading from "../../animations/loading.json";
import classes from "./LoadingSpinner.module.css";

export function LoadingSpinner() {
  return (
    <div className={classes.loadingSpinner}>
      <Lottie animationData={loading} style={{ width: '100%', maxWidth: 400, height: 'auto'}} />
    </div>
  );
}
