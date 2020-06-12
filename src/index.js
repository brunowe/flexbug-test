import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Page00 from './pages/Page00';
import Page01 from './pages/Page01';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Page00} />
        <Route path="/page-01" component={Page01} />
        <Redirect to="/" />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
