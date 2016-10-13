import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import { Provider } from 'react-redux';

/** Styles */
import 'normalize.css';
import './style/fonts.css';
import './style/colors.css';
import './index.css';
import logo from './logo.svg';

/** App State */
import store from './store';

/** Elements */
import NavBar from './components/navbar/NavBar';
import Domain from './containers/domain/Domain';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar logo={logo}>
          <Link to="/">Home</Link>
          <Link to="/123">Home</Link>
        </NavBar>

        <Match exactly pattern="/" component={Domain} />
        <Match exactly pattern="/asd" component={Domain} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);


/** MOCK DATA! */
import data from './data.json';
import { domainsFetched } from './containers/domain/actions';

store.dispatch(domainsFetched(data.domain));