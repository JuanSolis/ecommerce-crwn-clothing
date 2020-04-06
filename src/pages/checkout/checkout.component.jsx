import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
    CheckOutContainer,
    CheckOutHeader,
    HeaderBlock,
    Total,
    TextWarning
} from './checkout.styles';

const CheckoutPage = ({cartItems, total}) => (
    <CheckOutContainer>
        <CheckOutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckOutHeader>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }

        <Total>
            <span>Total: ${total}</span>
        </Total>
        
        <TextWarning>
            <span>*Please use the following test credit card for payments*</span>
            <span>4242 4242 4242 4242 ---exp: 04/20 -- Cvv: 123</span>
        </TextWarning>
        
        <StripeCheckoutButton price={total}/>
    </CheckOutContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);