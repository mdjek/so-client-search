import * as actionTypes from './types';

const initialState = {
    question: {},
    answers : [],
};

const QuestionReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case actionTypes.QUESTIONS_GET_QUESTION_FULFILLED: {
            return {
                ...state,
                question: action.question,
            };
        }

        case actionTypes.QUESTIONS_GET_ANSWERS_FULFILLED: {
            return {
                ...state,
                answers: action.answers,
            };
        }

        case actionTypes.QUESTION_RESET: {
            return {
                ...initialState,
            };
        }

        default: return state;
    }

};

export default QuestionReducer;
