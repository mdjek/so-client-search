import api from '../../api/index';
import AppHistory from '../../app/history';
import * as actionTypes from './types';
import getQueryParams from '../../lib/utils/locationExtensions';

export const getList = responseText => dispatch => (
    api.questions.getList(responseText)
        .then((data) => {
            dispatch({
                type: actionTypes.QUESTIONS_GET_FULFILLED,
                questionData: data.items,
            });
        })
);

export const getListByValue = (typeList, properties) => (dispatch, getState) => {
    const prevPanelListParams = getState().SearchReducer.panelListParams;


    if (prevPanelListParams.typeList !== typeList
            || prevPanelListParams.properties.name !== properties.name) {

        switch (typeList) {
            case 'byTag': {
                const { name } = properties;

                // dispatch({
                //     type: actionTypes.QUESTIONS_PANEL_QUESTIONS_GET_FULFILLED,
                //     panelListParams: {typeList, properties},
                // });

                return (api.questions.getListByTag(name)
                    .then((data) => {
                        console.log(data);

                        dispatch({
                            type: actionTypes.QUESTIONS_PANEL_QUESTIONS_GET_FULFILLED,
                            panelQuestionData: data.items,
                            panelListParams: {typeList, properties}
                        });
                    }))
            }

            case 'byAuthor': {
                const { id } = properties;

                // dispatch({
                //     type: actionTypes.QUESTIONS_PANEL_QUESTIONS_GET_FULFILLED,
                //     panelListParams: {typeList, properties},
                // });

                return (api.questions.getListByAuthor(id)
                    .then((data) => {
                        console.log(data);

                        dispatch({
                            type: actionTypes.QUESTIONS_PANEL_QUESTIONS_GET_FULFILLED,
                            panelQuestionData: data.items,
                            panelListParams: {typeList, properties},
                        });
                    }))
            }

            default: return;
        }
    }
};


export const resetPanel = () => dispatch => (
    dispatch({
        type: actionTypes.QUESTIONS_PANEL_RESET,
    })
);

export const reset = () => dispatch => (
    dispatch({
        type: actionTypes.QUESTIONS_RESET,
    })
);

export const init = () => dispatch => {
    const { location: { search } } = AppHistory;
    const responseText = getQueryParams('text', search);

    if (responseText) {
        dispatch(getList(responseText));
    }
};