import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import AppRoot from './app/AppRoot';
import AppReducers from './app/reducers'
import './index.css';


const store = createStore(
    AppReducers,
    compose(
        applyMiddleware(thunk),
    ),
);

render(
    <Provider store={store}>
        <AppRoot />
    </Provider>,
    document.getElementById('root'),
);
