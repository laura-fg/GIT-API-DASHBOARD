import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from '../components/Store/Provider.js';
import RoutesPrivate from '../components/Routes/Private/Private';
import PagesHome from './Home/Home';
import Login from './Login/login';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/" component={PagesHome} />
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;