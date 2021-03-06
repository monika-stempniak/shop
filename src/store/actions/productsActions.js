
export const GET_PRODUCTS_REQUESTED = 'GET_PRODUCTS_REQUESTED';
export const GET_PRODUCTS_DONE = 'GET_PRODUCTS_DONE';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';

const getProductsRequested = () => {
  return {
    type: 'GET_PRODUCTS_REQUESTED'
  };
}

const getProductsDone = (data) => {
  return {
    type: 'GET_PRODUCTS_DONE',
    payload: data
  };
}

const getProductsFailed = (error) => {
  return {
    type: 'GET_PRODUCTS_FAILED',
    payload: error
  };
}

const getProducts =() => {
  return async dispatch => {
    try {
      dispatch(getProductsRequested());
      const response = await fetch('http://react2018-shop.s3-website-eu-west-1.amazonaws.com');
      const products = await response.json();
      dispatch(getProductsDone(products));
    } catch(error) {
      dispatch(getProductsFailed(error));
    }
  }
}

export const actions = {
  getProducts,
}
