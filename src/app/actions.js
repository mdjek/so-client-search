import * as appActionTypes from './types';

export const requestPending = () => dispatch => (
    dispatch({
        type: appActionTypes.REQUEST_PENDING
    })
);

export const requestRejected = () => dispatch => (
    dispatch({
        type: appActionTypes.REQUEST_REJECTED
    })
);

export const resetRequestStatus = () => dispatch => (
    dispatch({
        type: appActionTypes.REQUEST_RESET_STATUS
    })
);

