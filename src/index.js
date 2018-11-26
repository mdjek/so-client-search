import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import AppHistory from './app/history';
import AppRoot from './app/AppRoot';
import AppReducers from './app/reducers'
import './index.css';

const store = createStore(
    connectRouter(AppHistory)(AppReducers),
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
