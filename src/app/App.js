import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { MainPageTemplate } from '../components/pageTemplates/index';

class App extends Component {
    getPageTemplate = () => {
        const { children } = this.props;

        return (
            <MainPageTemplate {...this.props}>
                {children}
            </MainPageTemplate>
        );
    };

    render() {
        return this.getPageTemplate();
    }
}

App.propTypes = {
    actions: PropTypes.shape({
        init: PropTypes.func,
    }),
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
