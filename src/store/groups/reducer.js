import { fromJS } from 'immutable';
import {
  FETCH_GROUPS,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_ERROR } from './actions';
  import { normalizeBy } from '../../utils/resource';


const initialState = fromJS({});

const groupReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_GROUPS:
    case FETCH_GROUPS_ERROR:
      return fromJS({});
    case FETCH_GROUPS_SUCCESS:
      return fromJS(normalizeBy(
        g => `${g.domain_id}${g.id}`,
        action.groups
      ));
    default:
      return state;
  }
};

export default groupReducer;