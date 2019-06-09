
export const UPDATE_CART = 'UPDATE_CART';

export const updateCart = (data) => {
  return {
    type: 'UPDATE_CART',
    payload: data,
  };
}

const addToCart = (product) => (dispatch, getState) => {
    const { cart } = getState();
    const products = [...cart.products, product];
    dispatch(updateCart(products));
  };

const removeFromCart = (productId) => (dispatch, getState) => {
    const { cart } = getState();
    const products = cart.products.filter(product => product.id === productId);
    dispatch(updateCart(products));
  };

export const actions = {
  addToCart,
  removeFromCart
}
