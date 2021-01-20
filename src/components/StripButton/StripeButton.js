import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeButton = ({price})=> {
  const priceForStripe = price * 100
  const publishKey =
    "pk_test_51I86LuEQm69JJbkWqBVxfc0zMl2iSh5puxnUSIK1o4X2MzyBCpKbp3TeH5Q97GwzvY40z9OF3wuzZmzEaljxjqwF00LV0zaZoO";
  const onToken = token => {
    console.log(token)
    alert("付款成功")
  }
    return (
      <StripeCheckout
        label="pay now"
        name="Alcohol"
        billingAddress
        shippingAddress
        image=""
        description={`總金額 $${price}`}
        amount={priceForStripe}
        panelLabel="pay now"
        token={onToken}
        stripeKey ={publishKey}
      />
    );
}

export default StripeButton;