import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tsToDate } from '../../lib/utils/dateExtensions';
import { Link } from 'react-router-dom';
import AppHistory from '../../app/history';
import getQueryParams from '../../lib/utils/locationExtensions';
import publictUrl from '../../publicUrl';

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

    renderMarkup = (content) => {
        return (
            <div dangerouslySetInnerHTML={{
                __html: content,
            }} />
        );
    };

    render() {
        const {
            question,
            answers,
            pendingStatusRequest,
            errorStatusRequest
        } = this.props;

        return (
            <>
                { pendingStatusRequest &&
                    (
                        <div className="spinner-block">
                            <div className="spinner" />
                        </div>
                    )
                }

                <ul className="nav nav-pills">
                    {
                        this.getRequestText() && (
                            <li role="presentation">
                                <Link to={`${process.env.NODE_ENV === 'development'
                                  ? ''
                                  : publictUrl[process.env.NODE_ENV]}/search/?text=${this.getRequestText()}`}>← Вернуться к результатам</Link>
                            </li>
                        )
                    }
                    <li role="presentation">
                        <Link to={publictUrl[process.env.NODE_ENV]}>Новый поиск</Link>
                    </li>
                </ul>

                {
                    errorStatusRequest
                        ? (<h3>Не удалось загрузить результаты :(</h3>)
                        : (
                            <>
                                {question && question.title
                                    ? (
                                        <div className="question-info">
                                            <h1>{question.title}</h1>
                                            {this.renderMarkup(question.body)}
                                            <div className="question-info__owner">{`— ${question.owner.display_name}, ${tsToDate(question.creation_date)}`}</div>
                                            <hr/>
                                        </div>
                                    )
                                    : (
                                        <h2>{
                                            pendingStatusRequest
                                                ? 'Загружаем данные вопроса...'
                                                : 'Вопрос не найден :('
                                        }</h2>
                                    )
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
                                    : (<p>
                                        {
                                            pendingStatusRequest
                                                ? 'Загружаем ответы...'
                                                : 'На этот вопрос ещё никто не ответил :('
                                        }
                                        </p>
                                    )
                                }
                            </>
                        )
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
    pendingStatusRequest: PropTypes.bool,
    errorStatusRequest: PropTypes.bool,
};

Question.defaultProps = {
    question: {},
    answers: [],
};

const mapStateToProps = state => ({
    question: state.QuestionReducer.question,
    answers: state.QuestionReducer.answers,
    pendingStatusRequest: state.AppReducer.pending,
    errorStatusRequest: state.AppReducer.error,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
