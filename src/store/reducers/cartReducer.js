import * as actions from '../actions/cartActions';

const initialState = {
  productsIds: null,
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCT_ID:
      return { productsIds: action.payload };
    default:
      return state;
  }
};
