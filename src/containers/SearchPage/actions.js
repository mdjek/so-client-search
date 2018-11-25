import api from '../../api/index';
import * as actionTypes from './types';

export const getQuestionList = responseText => dispatch => (
    api.questions.getQuestionList(responseText)
        .then((data) => {
            dispatch({
                type: actionTypes.QUESTIONS_GET_FULFILLED,
                questionData: data,
            });
        })
);