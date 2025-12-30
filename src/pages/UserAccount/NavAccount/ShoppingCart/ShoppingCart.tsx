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
import { getDiscountSubtotal, getSubtotal } from "../../../../utils/getSubtotal";
import { getVAT } from "../../../../utils/getVAT";
import { ShoppingCartNav } from "./ShoppingCartNav/ShoppingCartNav";
import { CheckoutButtons } from "./CheckoutButtons/CheckoutButtons";
import { NewOrderProps } from "../../../../types/userTypes";

import classes from './ShoppingCart.module.css';
import { useShoppingNavigation } from "../../../../hooks/useShoppingNavigation";
import { ALL } from "../../../../data/categories";

export function ShoppingCart() {
  const { order, resetOrder } = useShopContext();
  const { user, addOrder } = useUserContext();
  const { data, delivery, payment, updateItems, updateData, updateDelivery, updatePayment, resetCheckout } = useCheckoutContext();
  const [step, setStep] = useState(1);
  const addressFormRef = useRef<HTMLFormElement>(null);
  const { navigateToCategory } = useShoppingNavigation();

  useEffect(() => {
    if (step === 4) {
      resetOrder();
      resetCheckout();
    }
  }, [step]);

  const handleAddressForm = (data: DataProps) => {
    updateData(data);
    setStep(3);
  }

  if (!user) return null;

  // const subtotal = getSubtotal(order);
  const subtotalWithDiscount = getDiscountSubtotal(order);
  const country = data?.address.country ?? null;
  const total = subtotalWithDiscount + delivery.price + getVAT(subtotalWithDiscount, country);
  const productVat = getVAT(subtotalWithDiscount, country);

  const handlePlaceOrder = () => {
    if (!data) return;

    const newOrder: NewOrderProps = {
      items: order,
      shippingAddress: data,
      delivery,
      payment,
      total,
      vat: productVat,
    }

    addOrder(newOrder);
  };


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
            total={total}
            order={order}
            delivery={delivery}
            payment={payment}
            vat={productVat}
            updatePayment={updatePayment}
            updateDelivery={updateDelivery}
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
          <div>{renderStep()}</div>
        </div>
      )}


      < CheckoutButtons
        step={step}
        orderLength={order.length}
        onNext={nextStep}
        onPrev={prevStep}
        onContinue={() => navigateToCategory(ALL)}
      />
    </div >
  )
}