import * as actionTypes from './types';

const initialState = {
    questionData: [],
    panelQuestionData: [],
    panelListParams: { typeList: '', properties: { id: null, name: '' } },
};

const SearchResultPageReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case actionTypes.QUESTIONS_GET_FULFILLED: {
            return {
                ...state,
                questionData: action.questionData,
            };
        }

        case actionTypes.QUESTIONS_PANEL_QUESTIONS_GET_FULFILLED: {
            return {
                ...state,
                panelQuestionData: action.panelQuestionData,
                panelListParams: action.panelListParams,
            };
        }

        case actionTypes.QUESTIONS_RESET: {
            return {
                ...initialState,
            };
        }


        default: return state;
    }
};

export default SearchResultPageReducer;
