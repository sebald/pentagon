import { fromJS } from 'immutable';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR } from './actions';
import { normalizeBy } from '../../utils/resource';


const initialState = fromJS({});

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
    case FETCH_PRODUCTS_ERROR:
      return fromJS({});
    case FETCH_PRODUCTS_SUCCESS:
      return fromJS(normalizeBy(
        p => `${p.domain_id}${p.group_id}${p.id}`,
        action.products
      ));
    default:
      return state;
  }
};

export default productReducer;