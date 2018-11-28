import api from '../../api/index';
import AppHistory from '../../app/history';
import * as actionTypes from './types';
import getQueryParams from '../../lib/utils/locationExtensions';

export const goTo = (requestText) => () => {
    AppHistory.push(`/search/?text=${requestText}`);
};

export const getList = requestText => dispatch => (
    api.questions.getList(requestText)
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
    const requestText = getQueryParams('text', search);

    if (requestText) {
        dispatch(getList(requestText));
    }
};