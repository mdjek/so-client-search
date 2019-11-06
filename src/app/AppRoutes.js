import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Main } from '../containers/Main/index';
import { Search } from '../containers/Search/index';
import { Question } from '../containers/Question/index';
import { NotFound } from '../components/pageTemplates/index';
import publictUrl from '../publicUrl';

const AppRoutes = () => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/question/:id" component={Question} />
        <Route component={NotFound} />
      </Switch>
    );
  }

  return (
    <BrowserRouter basename={publictUrl[process.env.NODE_ENV]}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/question/:id" component={Question} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
