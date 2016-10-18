import { combineReducers } from 'redux-immutable';
import domains from './domains/reducer';
import groups from './groups/reducer';
import products from './products/reducer';

const rootReducer = combineReducers({
  domains,
  groups,
  products
});

export default rootReducer;