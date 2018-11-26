import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './actions';

class Main extends Component {
    state= {
        responseText: '',
    };

    changeHandler = (event) => {
        this.setState({
            responseText: event.target.value,
        });
    };

    searchHandler = (event) => {
        const { actions: { goTo }} = this.props;
        const { responseText } = this.state;

        event.preventDefault();
        goTo(responseText);
    };

    render() {
        return (
            <>
                <form
                    action="#"
                    method="get"
                    onSubmit={this.searchHandler}>
                    <input
                        type="text"
                        name="search"
                        onChange={this.changeHandler}
                    />
                    <button>Искать</button>
                </form>

                <Link to="/search" >Результаты</Link>
                <Link to="/question/12312">Вопрос</Link>
            </>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
