import { Button } from '../../../../../components/Button/Button';
import classes from './CheckoutButtons.module.css';

type CheckoutButtonsProps = {
  step: number;
  orderLength: number;
  onNext: () => void;
  onPrev: () => void;
  onContinue: () => void;
}

export function CheckoutButtons({ step, orderLength, onNext, onPrev, onContinue }: CheckoutButtonsProps) {
  const isFinal = step === 4;
  const isEmpty = orderLength === 0;

  if (isEmpty || isFinal) {
    return (
      <div className={classes.buttons}>
        <Button
          bgColor="black"
          textColor="white"
          text="CONTINUE SHOPPING"
          onClick={onContinue}
        />
      </div>
    );
  }

  return (
    <div className={classes.buttons}>
      <Button
        bgColor="black"
        textColor="white"
        text="BACK"
        onClick={onPrev}
        disabled={step === 1}
      />
      <Button
        bgColor="black"
        textColor="white"
        text={step === 3 ? "PLACE ORDER" : "NEXT"}
        onClick={onNext}
      />
    </div>
  );
}