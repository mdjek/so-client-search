import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './actions';

class SearchPage extends Component {
    render() {
        return (
            <>
                <form action="#" method="get">
                    <input
                        type="text"
                    />
                    <button>Искать</button>
                </form>

                <Link to="/search-result" >Результаты</Link>
                <Link to="/question/12312">Вопрос</Link>
            </>
        );
    }
}


const mapStateToProps = state => ({
    // questionData: state.SearchPageReducer.questionData,
});

const mapDispatchToProps = dispatch => ({
    // actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
