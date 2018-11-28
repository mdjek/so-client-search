import api from '../../api/index';
import * as actionTypes from './types';

export const getQuestion = questionId => dispatch => (
    api.questions.getQuestion(questionId)
        .then((data) => {
            dispatch({
                type: actionTypes.QUESTIONS_GET_QUESTION_FULFILLED,
                question: data.items && data.items.length > 0 ? data.items[0] : {},
            });
        })
);

export const getAnswers = questionId => dispatch => (
    api.questions.getAnswers(questionId)
        .then((data) => {
            dispatch({
                type: actionTypes.QUESTIONS_GET_ANSWERS_FULFILLED,
                answers: data.items,
            });
        })
);

export const init = questionId => (dispatch) => {
    if (questionId) {
        dispatch(getQuestion(questionId));
        dispatch(getAnswers(questionId));
    }
};

export const reset = () => (dispatch) => {
    dispatch({
        type: actionTypes.QUESTION_RESET,
    });
};