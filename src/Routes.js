import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { Home } from './pages/Homepage';
import Product from './pages/Product';
import { About } from './pages/About';

const Routes = () => (
  <div style={{ minHeight: '100vh', margin: 0 }}>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/product'>
        <Product />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </Switch>
  </div>
);

export default Routes;