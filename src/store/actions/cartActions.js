
export const GET_PRODUCT_ID = 'GET_PRODUCT_ID';

export const getProductsIds = (data) => {
  return {
    type: 'GET_PRODUCT_ID',
    payload: data,
  };
}

export const updateProduct = (id) => (dispatch, getState) => {
    const { cart } = getState();
    const productsIds = [...cart.productsIds, id];
    dispatch(getProductsIds(productsIds));
  };

