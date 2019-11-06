import React from 'react';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom';
import { Main } from '../containers/Main/index';
import { Search } from '../containers/Search/index';
import { Question } from '../containers/Question/index';
import { NotFound } from '../components/pageTemplates/index';
import AppHistory from '../app/history';

const AppRoutes = () => (
  <Router history={AppHistory}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/question/:id" component={Question} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);


export default AppRoutes;
