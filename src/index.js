// ie
import "@babel/polyfill";
// eslint-disable-next-line
import Promise from 'promise-polyfill';

import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import AppHistory from './app/history';
import AppRoot from './app/AppRoot';
import AppReducers from './app/reducers'
import './combineCss';

const createReducers = history => AppReducers(history);

const store = createStore(
    createReducers(AppHistory),
    compose(
        applyMiddleware(
            thunk,
            routerMiddleware(AppHistory),
        ),
    ),
);

render(
    <Provider store={store}>
        <AppRoot history={AppHistory} />
    </Provider>,
    document.getElementById('root'),
);
