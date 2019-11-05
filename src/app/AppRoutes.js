import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Main } from '../containers/Main/index';
import { Search } from '../containers/Search/index';
import { Question } from '../containers/Question/index';
import { NotFound } from '../components/pageTemplates/index';

const AppRoutes = () => (
  <BrowserRouter basename={`/${process.env.PUBLIC_SUB_DIR}`}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/question/:id" component={Question} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
