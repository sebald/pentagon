import { combineReducers } from 'redux-immutable';
import domains from './domains/reducer';

const rootReducer = combineReducers({
  domains
});

export default rootReducer;