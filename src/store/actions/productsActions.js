
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

const getProductsFailed= (error) => {
  return {
    type: 'GET_PRODUCTS_FAILED',
    payload: error
  };
}

export const getData =() => {
  return async dispatch => {
    try {
      dispatch(getProductsRequested());
      const response = await fetch('https://api.jsonbin.io/b/5cf311bee36bab4cf3101423');
      const data = await response.json();
      const products = data.results[0];

      console.log(data);
      console.log(products);
      dispatch(getProductsDone(products));
    } catch(error) {
      dispatch(getProductsFailed(error));
    }
  }
}
