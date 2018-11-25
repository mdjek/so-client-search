import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { SearchPage } from '../containers/SearchPage/index';
import { SearchResultPage } from '../containers/SearchResultPage/index';
import { QuestionPage } from '../containers/QuestionPage/index';
// import { NotFound } from '../components/pageTemplates/index';

const AppRoutes = () => (
    <Router>
        <>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/search-result" component={SearchResultPage} />
            <Route exact path="/question/:id" component={QuestionPage} />
            {/*<Route component={NotFound} />*/}
        </>
    </Router>
);

export default AppRoutes;
