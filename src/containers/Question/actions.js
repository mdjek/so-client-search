import api from '../../api/index';
import * as actionTypes from './types';
import { requestPending, requestRejected, resetRequestStatus } from '../../app/actions';

export const getQuestion = questionId => dispatch => {
    dispatch(requestPending());

    return api.questions.getQuestion(questionId)
        .then((data) => {
            dispatch({
                type: actionTypes.QUESTIONS_GET_QUESTION_FULFILLED,
                question: data.items && data.items.length > 0 ? data.items[0] : {},
            });

            dispatch(resetRequestStatus());
        })
        .catch(() => {
            dispatch(requestRejected());
        })
};

export const getAnswers = questionId => dispatch => {
    dispatch(requestPending());

    return api.questions.getAnswers(questionId)
        .then((data) => {
            dispatch({
                type: actionTypes.QUESTIONS_GET_ANSWERS_FULFILLED,
                answers: data.items,
            });

            dispatch(resetRequestStatus());
        })
        .catch(() => {
            dispatch(requestRejected());
        })
};

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

    dispatch(resetRequestStatus());
};