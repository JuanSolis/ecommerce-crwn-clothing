import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_LuRLdUdVYKiYto6vHklpCyNV00lKkjYLLE';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name = "CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da" 
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey ={publishableKey}
        ></StripeCheckout>
    )
};

export default StripeCheckoutButton;