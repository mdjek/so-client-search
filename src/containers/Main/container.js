import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as SearchActions from '../Search/actions';

class Main extends Component {
    state = {
        requestText: '',
    };

    changeHandler = (event) => {
        this.setState({
            requestText: event.target.value.trim(),
        });
    };

    searchHandler = (event) => {
        const { actions: { goTo }} = this.props;
        const { requestText } = this.state;

        event.preventDefault();

        if (requestText) {
            goTo(requestText);
        }
    };

    render() {
        return (
            <div className="row">
                <div className="col-xs-offset-3 col-xs-6">
                    <div className="search-block">
                        <form
                            action="#"
                            method="get"
                            onSubmit={this.searchHandler}
                        >
                            <div className="form-group row">
                                <div className="col-xs-9">
                                    <input
                                        type="text"
                                        name="search"
                                        className="form-control"
                                        placeholder="Ваш запрос"
                                        onChange={this.changeHandler}
                                    />
                                </div>

                                <div className="col-xs-3">
                                    <button
                                        className="btn btn-primary form-control"
                                    >
                                        {'Искать'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    goTo: PropTypes.func,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(SearchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
