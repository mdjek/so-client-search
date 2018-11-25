import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
    render() {
        return (
            <>
                <form action="">
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

SearchPage.propTypes = {};

export default SearchPage;
