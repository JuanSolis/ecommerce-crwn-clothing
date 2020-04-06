import React from 'react';

import {
    CartItemContainer,
    Image,
    ItemDetails,
    Name,
    Price
} from './cart-item.styles';


const CartItem = ({item: {imageUrl, price,name, quantity}}) => (
    <CartItemContainer>
        <Image imageUrl={imageUrl} alt="item"/>
        <ItemDetails>
            <Name>{name}</Name>
            <Price>{quantity} x ${price}</Price>
        </ItemDetails>
    </CartItemContainer>
);

export default CartItem;