import { useRef, useState } from "react";
import { useShopContext } from "../../../../context/ShopContext";
import { useUserContext } from "../../../../context/UserContext";
import { EmptyCard } from "../../../../components/EmptyCard/EmptyCard";
import { Cart } from "./Cart/Cart";
import { AddressForm } from "./AddressForm/AddressForm";
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
import { STEP } from "./step";

import classes from './ShoppingCart.module.css';
import { OrderError } from "./OrderError/OrderError";
import { ERROR_MESSAGES } from "../../../../constants/messages";
import { OrderSuccess } from "./OrderSuccess/OrderSuccess";

export function ShoppingCart() {
  const { order, clearOrder } = useShopContext();
  const { user } = useUserContext();
  const { shippingData, delivery, payment, updateItems, updateData, updateDelivery, updatePayment, resetCheckout } = useCheckoutContext();
  const [step, setStep] = useState(STEP.CART);
  const addressFormRef = useRef<HTMLFormElement>(null);
  const { navigateToCategory } = useShoppingNavigation();
  const [error, setError] = useState<Error | null>(null);

  const { mutate: createOrder, isPending } = useCreateOrder(
    () => {
      clearOrder();
      resetCheckout();
    },
    () => setStep(STEP.COMPLETE),
    (err) => setError(err),
  );

  const country = shippingData?.country ?? null;
  const { vat, total } = useCheckoutPrice({
    order,
    country,
    delivery,
  });

  const handleAddressForm = (data: DataProps) => {
    updateData(data);
    setStep(STEP.REVIEW);
  }

  if (!user) return null;


  const handlePlaceOrder = () => {
    if (!shippingData || !delivery || !payment) return;
    if (isPending) return;

    setError(null);

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
    if (step === STEP.CART) {
      updateItems(order);
    }

    if (step === STEP.ADDRESS) {
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

  const onError = () => setStep(STEP.CART);

  const onContinue = () => navigateToCategory(ALL);

  const renderStep = () => {
    switch (step) {
      case STEP.CART:
        return <Cart order={order} />;
      case STEP.ADDRESS:
        return (
          <AddressForm
            formRef={addressFormRef}
            onSubmit={handleAddressForm}
          />
        );
      case STEP.REVIEW:
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

      {step === STEP.COMPLETE ? (
        <div>
          <ShoppingCartNav step={step} />
          <div className={classes.orderContent}>
            {error ? (
              <OrderError message={`${ERROR_MESSAGES.GENERIC} ${ERROR_MESSAGES.TRY_AGAIN}`} />
            ) : (
              <OrderSuccess />
            )}
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
        error={error}
        onError={onError}
        step={step}
        orderLength={order.length}
        onNext={nextStep}
        onPrev={prevStep}
        onContinue={onContinue}
        onPost={handlePlaceOrder}
        disabled={isPending}
      />
    </div >
  )
}