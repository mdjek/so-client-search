// import AppHistory from '../app/history';
import { combineReducers } from 'redux';
import { MainReducer } from '../containers/Main/index';
import { SearchResultPageReducer } from '../containers/SearchResultPage/index';
import { connectRouter } from 'connected-react-router';

const AppReducers = (history) => (
    combineReducers({
        router: connectRouter(history),
        MainReducer,
        SearchResultPageReducer,
    })
);

export default AppReducers;
