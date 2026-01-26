import Lottie from "lottie-react";
import loading from "../../animations/loading.json";
import classes from "./LoadingSpinner.module.css";

export function LoadingSpinner() {
  return (
    <div className={classes.loadingSpinner}>
      <Lottie animationData={loading} style={{ width: 600, height: 600 }} />
    </div>
  );
}
