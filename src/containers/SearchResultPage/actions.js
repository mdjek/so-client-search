import api from '../../api/index';
import * as actionTypes from './types';

export const getList = responseText => dispatch => (
    api.questions.getQuestionList(responseText)
        .then((data) => {
            dispatch({
                type: actionTypes.QUESTIONS_GET_FULFILLED,
                questionData: data,
            });
        })
);

export const getListByValue = (typeList, properties) => (dispatch, getState) => {
    const prevPanelListParams = getState().SearchResultPageReducer.panelListParams;


    if (prevPanelListParams.typeList !== typeList
            || prevPanelListParams.properties.name !== properties.name) {

        switch (typeList) {
            case 'byTag': {
                const { name } = properties;

                dispatch({
                    type: actionTypes.QUESTIONS_PANEL_QUESTIONS_GET_FULFILLED,
                    panelListParams: {typeList, properties},
                });
                // return (api.questions.getListByTag(name)
                //     .then((data) => {
                //         dispatch({
                //             type: actionTypes.QUESTIONS_PANEL_QUESTIONS_GET_FULFILLED,
                //             panelQuestionData: data,
                //             panelListParams: {typeList, properties}
                //         });
                //     }))
            }

            case 'byAuthor': {
                const { id } = properties;

                dispatch({
                    type: actionTypes.QUESTIONS_PANEL_QUESTIONS_GET_FULFILLED,
                    panelListParams: {typeList, properties},
                });

                // return (api.questions.getListByAuthor(id)
                //     .then((data) => {
                //         dispatch({
                //             type: actionTypes.QUESTIONS_PANEL_QUESTIONS_GET_FULFILLED,
                //             panelQuestionData: data,
                //             panelListParams: {typeList, properties},
                //         });
                //     }))
            }

            default: return;
        }
    }
};

export const reset = () => dispatch => (
    dispatch({
        type: actionTypes.QUESTIONS_RESET,
        questionData: [],
        typeList: {},
    })
);