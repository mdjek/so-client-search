import api from '../../api/index';
import AppHistory from '../../app/history';
import * as actionTypes from './types';
import { requestPending, requestRejected, resetRequestStatus } from '../../app/actions';
import getQueryParams from '../../lib/utils/locationExtensions';

export const goTo = (requestText) => () => {
    AppHistory.push(`/search/?text=${requestText}`);
};

export const getList = requestText => dispatch => {
    dispatch(requestPending());

    return api.questions.getList(requestText)
        .then((data) => {
            dispatch({
                type: actionTypes.QUESTIONS_GET_FULFILLED,
                questionData: data.items,
            });

            dispatch(resetRequestStatus());
        })
};

export const getRequestText = (requestText) => dispatch => {
    dispatch({
        type: actionTypes.QUESTIONS_GET_REQUEST_TEXT,
        requestText,
    });
};

export const getListByValue = (typeList, properties) => (dispatch, getState) => {
    const prevPanelListParams = getState().SearchReducer.panelListParams;

    dispatch(requestPending());

    if (prevPanelListParams.typeList !== typeList
            || prevPanelListParams.properties.name !== properties.name) {

        switch (typeList) {
            case 'byTag': {
                const { name } = properties;

                return (api.questions.getListByTag(name)
                    .then((data) => {
                        dispatch({
                            type: actionTypes.QUESTIONS_PANEL_QUESTIONS_GET_FULFILLED,
                            panelQuestionData: data.items,
                            panelListParams: {typeList, properties}
                        });

                        dispatch(resetRequestStatus());
                    })
                    .catch(() => {
                        dispatch(requestRejected());
                    })
                )
            }

            case 'byAuthor': {
                const { id } = properties;

                return (api.questions.getListByAuthor(id)
                    .then((data) => {
                        dispatch({
                            type: actionTypes.QUESTIONS_PANEL_QUESTIONS_GET_FULFILLED,
                            panelQuestionData: data.items,
                            panelListParams: {typeList, properties},
                        });

                        dispatch(resetRequestStatus());
                    })
                    .catch(() => {
                        dispatch(requestRejected());
                    })
                )
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

export const reset = () => dispatch => {
    dispatch({
        type: actionTypes.QUESTIONS_RESET,
    });

    dispatch(resetRequestStatus());
};

export const init = () => dispatch => {
    const { location: { search } } = AppHistory;
    const requestText = getQueryParams('text', search);

    if (requestText) {
        dispatch(getRequestText(requestText));
        dispatch(getList(requestText));
    }
};