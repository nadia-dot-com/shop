import { useEffect, useRef, useState } from "react";
import { useShopContext } from "../../../../context/ShopContext";
import { useUserContext } from "../../../../context/UserContext";
import { EmptyCard } from "../../../OrderModal/EmptyCard/EmptyCard";
import { Cart } from "./Cart/Cart";

import classes from './ShoppingCart.module.css';
import { AddressForm } from "./AddressForm/AddressForm";
import { OrderComplete } from "./OrderComplete/OrderComplete";
import { Button } from "../../../../component/Button/Button";
import { useCheckoutContext } from "../../../../context/CheckoutContext";
import { DataProps } from "../../../../types/checkoutTypes";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../config/Routes";
import { CheckoutReview } from "./CheckoutReview/CheckoutReview";
import { getSubtotal } from "../../../../utils/getSubtotal";
import { getVAT } from "../../../../utils/getVAT";
import { OrdersProps } from "../../../../types/userTypes";
import { useOrdersContextHook } from "../../../../context/OrdersContext";
import { ShoppingCartNav } from "./ShoppingCartNav/ShoppingCartNav";
import { CheckoutButtons } from "./CheckoutButtons/CheckoutButtons";

export function ShoppingCart() {
  const { order, finalizeOrder } = useShopContext();
  const { user } = useUserContext();
  const { data, delivery, payment, updateItems, updateData, updateDelivery, updatePayment, resetCheckout } = useCheckoutContext();
  const { addOrder } = useOrdersContextHook();
  const [step, setStep] = useState(1);
  const addressFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (step === 4) {
      finalizeOrder();
      resetCheckout();
    }
  }, [step]);

  const navigate = useNavigate();
  const path = `/${ROUTES.products}`;

  const handleAddressForm = (data: DataProps) => {
    updateData(data);
    setStep(3);
  }

  if (!user) return null;

  const handlePlaceOrder = () => {
    if (!data) return;

    const newOrder: OrdersProps = {
      items: order,
      data,
      delivery,
      payment,
    }

    addOrder(newOrder);
  };

  const subtotal = getSubtotal(order);
  const country = data?.address.country ?? null;
  const total = subtotal + delivery.price + getVAT(subtotal, country);

  const nextStep = () => {
    if (step === 1) {
      updateItems(order);
    }

    if (step === 2) {
      const form = addressFormRef.current;
      if (!form) return;

      if (!form.reportValidity()) {
        return;
      }

      form.requestSubmit();
      return;
    }

    if (step === 3) {
      handlePlaceOrder()
    }

    setStep((s) => s + 1)
  };

  const prevStep = () => setStep((s) => s - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Cart order={order} />;
      case 2:
        return (
          <AddressForm
            formRef={addressFormRef}
            onSubmit={handleAddressForm}
          />
        );
      case 3:
        return (
          <CheckoutReview
            order={order}
            delivery={delivery}
            updateDelivery={updateDelivery}
            payment={payment}
            updatePayment={updatePayment}
            total={total}
          />
        );
    }
  };

  return (
    <div className={classes.shoppingCart}>

      {step === 4 ? (
      <div>
        <ShoppingCartNav step={step} />
        <div className={classes.orderContent}>
          <OrderComplete />
        </div>
      </div>
    ) : order.length === 0 ? (
      <div className={classes.emptyCard}>
        <EmptyCard />
      </div>
    ) : (
      <div>
        <ShoppingCartNav step={step} />
        <div className={classes.orderContent}>{renderStep()}</div>
      </div>
    )}


      < CheckoutButtons
        step={step}
        orderLength={order.length}
        onNext={nextStep}
        onPrev={prevStep}
        onContinue={() => navigate(path)}
      />
    </div >
  )
}