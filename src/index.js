import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import AppHistory from './app/history';
import AppRoot from './app/AppRoot';
import AppReducers from './app/reducers'
import './index.css';

export const createReducers = history => AppReducers(history);

const store = createStore(
    createReducers(AppReducers),
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
