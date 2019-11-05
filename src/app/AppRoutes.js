import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from '../containers/Main/index';
import { Search } from '../containers/Search/index';
import { Question } from '../containers/Question/index';
import { NotFound } from '../components/pageTemplates/index';

const AppRoutes = () => (
    <Switch>
        <Route exact path="so-client-search/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/question/:id" component={Question} />        
        <Route component={NotFound} />
    </Switch>
);

export default AppRoutes;
