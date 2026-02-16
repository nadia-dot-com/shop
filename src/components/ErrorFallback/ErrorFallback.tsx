import Lottie from "lottie-react";
import warning from "../../animations/warning.json";
import { FallbackProps } from "react-error-boundary";
import { Button } from "../Button/Button";

import classes from "./ErrorFallback.module.css";

export function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.errorFallback}>
        <Lottie animationData={warning} loop={false} />

        <div>Something went wrong...</div>

        <div>Please refresh the page!</div>
        <Button
          bgColor="black"
          textColor="white"
          text="Try again"
          onClick={resetErrorBoundary}
        />
      </div>
    </div>
  );
}
