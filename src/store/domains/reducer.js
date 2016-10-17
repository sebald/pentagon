import { fromJS } from 'immutable';
import {
  FETCH_DOMAINS,
  FETCH_DOMAINS_SUCCESS,
  FETCH_DOMAINS_ERROR } from './actions';
import { normalizeBy } from '../../utils/resource';


const initialState = fromJS({});

const domainReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DOMAINS:
    case FETCH_DOMAINS_ERROR:
      return fromJS({});
    case FETCH_DOMAINS_SUCCESS:
      return fromJS(normalizeBy(
        d => d.id,
        action.domains
      ));
    default:
      return state;
  }
};

export default domainReducer;