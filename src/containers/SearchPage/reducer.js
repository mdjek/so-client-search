import * as actionTypes from './types';

const initialState = {
    questionData: [],
};

const SearchPageReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case actionTypes.QUESTIONS_GET_FULFILLED: {
            return {
                ...state,
                questionData: action.questionData,
            };
        }

        default: return state;
    }
};

export default SearchPageReducer;
