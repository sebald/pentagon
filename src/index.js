import React from 'react';
import ReactDOM from 'react-dom';

/** Styles */
import 'normalize.css';
import './style/fonts.css';
import './style/colors.css';
import './index.css';
import logo from './pentagon.svg';

/** App State */
import store from './store/store';

/** Elements */
import Router from 'react-router/BrowserRouter';
import Link from 'react-router/Link';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss'
import Redirect from 'react-router/Redirect';
import { Provider } from 'react-redux';
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
          <Link to="/domains">Home</Link>
        </NavBar>

        <Match pattern="/domains" component={Domain} />
        <Match pattern="/" exactly component={() => <Redirect to="/domains"/>}/>

        <Miss component={() => <h1>404</h1>}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);


/** MOCK DATA! */
import data from './data.json';
import { domainsFetched } from './store/domains/actions';

store.dispatch(domainsFetched(data.domain));