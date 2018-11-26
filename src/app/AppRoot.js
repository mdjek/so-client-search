import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import AppRoutes from './AppRoutes';

const AppRoot = ({ history }) => (
    <App>
        <ConnectedRouter history={history}>
            <AppRoutes />
        </ConnectedRouter>
    </App>
);

AppRoot.propTypes = {
    history: PropTypes.shape().isRequired,
};

export default AppRoot;
