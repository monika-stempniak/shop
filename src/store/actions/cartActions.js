
export const UPDATE_CART = 'UPDATE_CART';

export const updateCart = (data) => {
  return {
    type: 'UPDATE_CART',
    payload: data,
  };
}

const addToCart = (product) => (dispatch, getState) => {
    const { cart } = getState();
    const productsIds = [...cart.products, product];
    dispatch(updateCart(productsIds));
  };

export const actions = {
  addToCart
}
