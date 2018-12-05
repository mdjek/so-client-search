import * as appActionTypes from './types';

const initialState = {
    pending: false,
    error: false,
};

const AppReducer = (state = { ...initialState }, action) => {
    switch(action.type) {
        case appActionTypes.REQUEST_PENDING: {
            return {
                pending: true,
                error: false,
            }
        }

        case appActionTypes.REQUEST_REJECTED: {
            return {
                pending: false,
                error: true,
            }
        }

        case appActionTypes.REQUEST_RESET_STATUS: {
            return initialState;
        }

        default: return state;
    }

};

export default AppReducer;
