import { combineReducers } from 'redux-immutable';
import domains from './domains/reducer';
import groups from './groups/reducer';

const rootReducer = combineReducers({
  domains,
  groups
});

export default rootReducer;