export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem,quantity: cartItem.quantity +1 }
            : cartItem
            )
    }
    
    return [...cartItems, {...cartItemToAdd, quantity: 1}]

};

export const removeItemFromCart = (cartItems, carItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === carItemToRemove.id
    );

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItems => cartItems.id !== carItemToRemove.id)
    }

    return cartItems.map(
        cartItem => 
        cartItem.id === carItemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity - 1  }
        :
        cartItem
    )
};