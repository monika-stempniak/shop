import * as actions from '../actions/productsActions';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_REQUESTED:
      return { isLoading: true };
    case actions.GET_PRODUCTS_DONE:
      return { data: action.payload, isLoading: false };
    case actions.GET_PRODUCTS_FAILED:
      return { error: action.payload, isLoading: false }
    default:
      return state;
  }
};
