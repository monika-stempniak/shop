import * as actions from '../actions/cartActions';

const initialState = {
  products: [],
  productsCount: 0,
  productsAmount: 0,
}

const getSum = (amount) => {
  const sum = amount.reduce((acc, currentValue) => Number(acc) + (Number(currentValue.amount)), 0).toFixed(2);
  return Number(sum);
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_CART:
      return { 
        products: action.payload,
        productsCount: action.payload.length,
        productsAmount: getSum(action.payload),
      };
    default:
      return state;
  }
};
