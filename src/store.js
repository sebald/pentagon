import { createStore, compose } from 'redux';
import reducer from './reducers';

const devtools = window.devToolsExtension || (() => (noop) => noop);
const enhancers = [devtools()];

/** Create Store */
const store = createStore(reducer, compose(...enhancers));
export default store;