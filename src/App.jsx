import React from 'react';

import logo from './pentagon.svg';
import configureStore from './store/store';

import Router from 'react-router/BrowserRouter';
import Link from 'react-router/Link';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss'
import Redirect from 'react-router/Redirect';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';

import NavBar from './components/navbar/NavBar';
import Domain from './containers/domain/Domain';

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Helmet
          title="Home"
          titleTemplate="%s | Pentagon"
        />

        <NavBar logo={logo}>
          <Link to="/domain">Home</Link>
        </NavBar>

        <Match pattern="/domain" component={Domain} />
        <Match pattern="/" exactly component={() => <Redirect to="/domain"/>}/>

        <Miss component={() => <h1>404</h1>}/>
      </div>
    </Router>
  </Provider>
);

export default App;