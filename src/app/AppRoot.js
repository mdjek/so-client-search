import React, { Component } from 'react';
import App from './App';
import AppRoutes from './AppRoutes';

class AppRoot extends Component {
    render() {
        return (
            <App>
                <AppRoutes />
            </App>
        );
    }
}

export default AppRoot;
