// import AppHistory from '../app/history';
import { combineReducers } from 'redux';
import { MainReducer } from '../containers/Main/index';
import { SearchReducer } from '../containers/Search/index';
import { connectRouter } from 'connected-react-router';

const AppReducers = (history) => (
    combineReducers({
        router: connectRouter(history),
        MainReducer,
        SearchReducer,
    })
);

export default AppReducers;
