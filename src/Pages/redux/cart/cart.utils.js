export const addItemToCart = (cartItems, cartAddItem) => {
    const exisitingCartItem = cartItems.find(
        cartItem => cartItem.id === cartAddItem.id
    );
    if (exisitingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartAddItem.id
                ? { ...cartItem, quantity: cartItem + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartAddItem, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, cartAddItem) => {
    const exisitingCartItem = cartItems.find(
        cartItem => cartItem.id === cartAddItem.id
    );

    if (exisitingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartAddItem.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartAddItem.id
            ? { ...cartItem, quantity: cartItem + 1 }
            : cartItem
    );
};