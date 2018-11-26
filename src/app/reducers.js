import { combineReducers } from 'redux';
import { MainReducer } from '../containers/Main/index';
import { SearchResultPageReducer } from '../containers/SearchResultPage/index';

const AppReducers = combineReducers({
    MainReducer,
    SearchResultPageReducer,
});

export default AppReducers;
