import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import TemplatePageWithWireframe from './pages/_templates/TemplatePageWithWireframe';
import TemplatePage00 from './pages/_templates/TemplatePage00';
import TemplatePage01 from './pages/_templates/TemplatePage01';
import TemplatePage02 from './pages/_templates/TemplatePage02';
import TemplatePage03 from './pages/_templates/TemplatePage03';
import Page00 from './pages/Page00';
import Page01 from './pages/Page01';
import Page02 from './pages/Page02';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Page00} />
        <Route path="/page-01" component={Page01} />
        <Route path="/page-02" component={Page02} />
        <Route path="/template-page-00" component={TemplatePage00} />
        <Route path="/template-page-01" component={TemplatePage01} />
        <Route path="/template-page-02" component={TemplatePage02} />
        <Route path="/template-page-03" component={TemplatePage03} />
        <Route path="/wireframe" component={TemplatePageWithWireframe} />
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
