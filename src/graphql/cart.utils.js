const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const getCartItemCount = cartItems => cartItems.reduce(
  (accumalatedQuantity, cartItem) =>
    accumalatedQuantity + cartItem.quantity,
  0
);

const getCartItemTotal = cartItems => cartItems.reduce(
  (accumalatedQuantity, cartItem) =>
    accumalatedQuantity + cartItem.quantity * cartItem.price,
  0
);

const clearItemFromCart = (cartItems, item) => cartItems.filter(
  cartItem => cartItem.id !== item.id
);

export { addItemToCart, removeItemFromCart, getCartItemCount, getCartItemTotal, clearItemFromCart };