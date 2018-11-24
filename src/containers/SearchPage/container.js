import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchPage extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <input
                        type="text"
                    />
                    <button>Искать</button>
                </form>
            </div>
        );
    }
}

SearchPage.propTypes = {};

export default SearchPage;
