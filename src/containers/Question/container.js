import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tsToDate } from '../../lib/utils/dateExtensions';
import { Link } from 'react-router-dom';
import AppHistory from '../../app/history';
import getQueryParams from '../../lib/utils/locationExtensions';

class Question extends Component {
    componentDidMount() {
        const {
            match: { params: { id } },
            actions: { init }
        } = this.props;

        init(id);
    }

    componentWillUnmount() {
        const {
            actions: { reset }
        } = this.props;

        reset();
    }

    getRequestText = () => {
        const { location: { search } } = AppHistory;
        const requestText = getQueryParams('refer', search);

        if (requestText) {
            return requestText;
        }
    };

    renderMarkup = (prop) => {
        return (
            <div dangerouslySetInnerHTML={{
                __html: prop,
            }} />
        );
    };

    render() {
        const { question, answers } = this.props;

        return (
            <>
                <ul className="nav nav-pills">
                    {
                        this.getRequestText() && (
                            <li role="presentation">
                                <Link to={`/search/?text=${this.getRequestText()}`}>← Вернуться к результатам</Link>
                            </li>
                        )
                    }
                    <li role="presentation">
                        <Link to="/">Новый поиск</Link>
                    </li>
                </ul>
                {question && question.title
                    ? (
                        <div className="question-info">
                            <h1>{question.title}</h1>
                            {this.renderMarkup(question.body)}
                            <div className="question-info__owner">{`— ${question.owner.display_name}, ${tsToDate(question.creation_date)}`}</div>
                            <hr/>
                        </div>
                    )
                    : <h2>Вопрос не найден</h2>
                }

                {question.answer_count > 0 ? (
                        <div id="answers">
                            <h2>Ответы</h2>
                            <ul className="answer-list">
                                {
                                    answers.map(item => (
                                        item.is_accepted === true &&
                                            (<li key={item.answer_id} className="accepted">
                                                {this.renderMarkup(item.body)}
                                                <div className="answer-info">
                                                    {`— ${item.owner.display_name}, ${tsToDate(item.creation_date)}`}
                                                </div>
                                            </li>)
                                        )
                                    )
                                }

                                {
                                    answers.map(item => (
                                            item.is_accepted !== true &&
                                            (<li key={item.answer_id}>
                                                {this.renderMarkup(item.body)}
                                                <div className="answer-info">
                                                    {`— ${item.owner.display_name}, ${tsToDate(item.creation_date)}`}
                                                </div>
                                            </li>)
                                        )
                                    )
                                }

                            </ul>
                        </div>
                    )
                    : <p>Ответов пока нет :(</p>
                }
            </>
        );
    }
}

Question.propTypes = {
    action: PropTypes.shape({
       init: PropTypes.func,
       reset: PropTypes.func,
    }),
    question: PropTypes.shape(),
    answers: PropTypes.arrayOf(
        PropTypes.shape(),
    ),
};

Question.defaultProps = {
    question: {},
    answers: [],
};

const mapStateToProps = state => ({
    question: state.QuestionReducer.question,
    answers: state.QuestionReducer.answers,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
