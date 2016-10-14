import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import Redirect from 'react-router/Redirect';
import { Provider } from 'react-redux';

/** Styles */
import 'normalize.css';
import './style/fonts.css';
import './style/colors.css';
import './index.css';
import logo from './pentagon.svg';

/** App State */
import store from './store/store';

/** Elements */
import Helmet from 'react-helmet';
import NavBar from './components/navbar/NavBar';
import Domain from './containers/domain/Domain';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Helmet
          title="Home"
          titleTemplate="%s | Pentagon"
        />
        <NavBar logo={logo}>
          <Link to="/domains">Domains</Link>
        </NavBar>

        <Match exactly pattern="/" component={() => <Redirect to="/domains"/>} />
        <Match exactly pattern="/domains" component={Domain} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);


/** MOCK DATA! */
import data from './data.json';
import { domainsFetched } from './store/domains/actions';

store.dispatch(domainsFetched(data.domain));