import { useEffect, useRef, useState } from "react";
import { useShopContext } from "../../../../context/ShopContext";
import { useUserContext } from "../../../../context/UserContext";
import { EmptyCard } from "../../../../components/EmptyCard/EmptyCard";
import { Cart } from "./Cart/Cart";
import { AddressForm } from "./AddressForm/AddressForm";
import { OrderComplete } from "./OrderComplete/OrderComplete";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import { DataProps } from "../../../../types/checkoutTypes";
import { CheckoutReview } from "./CheckoutReview/CheckoutReview";
import { ShoppingCartNav } from "./ShoppingCartNav/ShoppingCartNav";
import { CheckoutButtons } from "./CheckoutButtons/CheckoutButtons";
import { useShoppingNavigation } from "../../../../hooks/useShoppingNavigation";
import { ALL } from "../../../../data/categories";
import { useCheckoutPrice } from "../../../../hooks/useCheckoutPrice";
import { useCreateOrder } from "../../../../hooks/useCreateOrder";
import { buildOrderPayload } from "../../../../utils/buildOrderPayload";

import classes from './ShoppingCart.module.css';

const STEP_1 = 1;
const STEP_2 = 2;
const STEP_3 = 3;
const STEP_4 = 4;


export function ShoppingCart() {
  const { order, resetOrder } = useShopContext();
  const { user } = useUserContext();
  const { shippingData, delivery, payment, updateItems, updateData, updateDelivery, updatePayment, resetCheckout } = useCheckoutContext();
  const [step, setStep] = useState(STEP_1);
  const addressFormRef = useRef<HTMLFormElement>(null);
  const { navigateToCategory } = useShoppingNavigation();
  const [error, setError] = useState<Error | null>(null)

  const { mutate: createOrder, isPending } = useCreateOrder(
    () => handleSuccessCallback,
    ()=>  setStep(STEP_4),
    (err) => setError(err),
  );

  const handleSuccessCallback = () => {
    resetOrder();
    resetCheckout();
  }

  const handleErrorCallback = () => {
    setError;
  }

  const country = shippingData?.country ?? null;
  const { vat, total } = useCheckoutPrice({
    order,
    country,
    delivery,
  });

  const handleAddressForm = (data: DataProps) => {
    updateData(data);
    setStep(STEP_3);
  }

  if (!user) return null;


  const handlePlaceOrder = () => {
    if (!shippingData || !delivery || !payment) return;
    if (isPending) return;

    const payload = buildOrderPayload({
      items: order,
      shippingAddress: shippingData,
      delivery,
      payment,
      total,
    });

    createOrder(payload);
  };

  const nextStep = () => {
    if (step === STEP_1) {
      updateItems(order);
    }

    if (step === STEP_2) {
      const form = addressFormRef.current;
      if (!form) return;

      if (!form.reportValidity()) {
        return;
      }

      form.requestSubmit();
      return;
    }

    setStep((s) => s + 1)
  };

  const prevStep = () => setStep((s) => s - 1);

  const renderStep = () => {
    switch (step) {
      case STEP_1:
        return <Cart order={order} />;
      case STEP_2:
        return (
          <AddressForm
            formRef={addressFormRef}
            onSubmit={handleAddressForm}
          />
        );
      case STEP_3:
        return (
          <CheckoutReview
            order={order}
            delivery={delivery}
            payment={payment}
            vat={vat}
            total={total}
            updatePayment={updatePayment}
            updateDelivery={updateDelivery}
          />
        );
    }
  };

  return (
    <div className={classes.shoppingCart}>

      {step === STEP_4 ? (
        <div>
          <ShoppingCartNav step={step} />
          <div className={classes.orderContent}>
            <OrderComplete error={error} />
          </div>
        </div>
      ) : order.length === 0 ? (
        <div className={classes.emptyCard}>
          <EmptyCard />
        </div>
      ) : (
        <div>
          <ShoppingCartNav step={step} />
          <div>{renderStep()}</div>
        </div>
      )}


      < CheckoutButtons
        step={step}
        orderLength={order.length}
        onNext={nextStep}
        onPrev={prevStep}
        onContinue={() => navigateToCategory(ALL)}
        onPost={handlePlaceOrder}
        disabled={isPending}
      />
    </div >
  )
}