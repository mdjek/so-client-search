import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuestionPage extends Component {
    render() {
        console.log(this.props);

        return (
            <>
                Вопрос
            </>
        );
    }
}

QuestionPage.propTypes = {};

export default QuestionPage;
