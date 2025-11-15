import { useRef, useState } from "react";
import { useShopContext } from "../../../../context/ShopContext";
import { useUserContext } from "../../../../context/UserContext";
import { EmptyCard } from "../../../OrderModal/EmptyCard/EmptyCard";
import { Cart } from "./Cart/Cart";

import classes from './ShoppingCart.module.css';
import { AddressForm } from "./AddressForm/AddressForm";
import { PaymentMethod } from "./PaymentMethod/PaymentMethod";
import { OrderComplete } from "./OrderComplete/OrderComplete";
import { Button } from "../../../../component/Button/Button";
import { cn } from "../../../../utils/cn";

export function ShoppingCart() {
  const { order } = useShopContext();
  const { user } = useUserContext();

  const [step, setStep] = useState(1);
  const addressFormRef = useRef<HTMLFormElement>(null)

  if (!user) return null;

  const nextStep = () => {
    if(step === 2) {
      const form = addressFormRef.current;
      if(!form) return;

      if(!form.reportValidity()) {
        return;
      }
    }

    setStep((s) => s + 1)
  };
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div className={classes.shoppingCart}>

      <div className={classes.steps}>
        <span className={cn(classes.stepSpan, step === 1 && classes.activeStep)}>
          Cart
          <svg width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M8 4l8 8-8 8" />
          </svg>
        </span>
        <span className={cn(classes.stepSpan, step === 2 && classes.activeStep)}>
          Address
          <svg width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M8 4l8 8-8 8" />
          </svg>
        </span>
        <span className={cn(classes.stepSpan, step === 3 && classes.activeStep)}>
          Payment
          <svg width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M8 4l8 8-8 8" />
          </svg>
        </span>
        <span className={cn(classes.stepSpan, step === 4 && classes.activeStep)}>
          Complete
        </span>
      </div>

      <div>
        {order.length === 0 ?
          (
            <div className={classes.emptyCard}>
              <EmptyCard />
            </div>
          ) :
          (
            <div className={classes.orderContent}>
              {step === 1 && <Cart />}
              {step === 2 && <AddressForm formRef={addressFormRef}/>}
              {step === 3 && <PaymentMethod />}
              {step === 4 && <OrderComplete />}
            </div>
          )}
      </div>

      <div className={classes.buttons}>
        <Button
          bgColor="black"
          textColor="white"
          text="BACK"
          onClick={prevStep}
          disabled={step === 1}
        />
        <Button
          bgColor="black"
          textColor="white"
          text="NEXT"
          onClick={nextStep}
          disabled={step === 4}
        />
      </div>
    </div >
  )
}