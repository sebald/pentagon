import { combineReducers } from 'redux-immutable';
import domains from './containers/domain/reducer';

const rootReducer = combineReducers({
  domains
});

export default rootReducer;