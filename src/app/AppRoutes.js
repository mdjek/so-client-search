import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../containers/Main/index';
import { Search } from '../containers/Search/index';
import { QuestionPage } from '../containers/QuestionPage/index';
import { NotFound } from '../components/pageTemplates/index';

const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/question/:id" component={QuestionPage} />
        <Route component={NotFound} />
    </Switch>
);

export default AppRoutes;
