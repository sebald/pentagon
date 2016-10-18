import { createStore, compose } from 'redux';
import reducer from './reducers';

/** MOCK DATA! */
import data from '../data.json';
import { domainsFetched } from './domains/actions';
import { groupsFetched } from './groups/actions';

const configureStore = () => {
  const devtools = window.devToolsExtension || (() => (noop) => noop);
  const enhancers = [devtools()];

  /** Create Store */
  const store = createStore(reducer, compose(...enhancers));

  /** MOCK DATA! */
  store.dispatch(domainsFetched(data.domain));
  store.dispatch(groupsFetched(data.group));

  return store;
}

export default configureStore;