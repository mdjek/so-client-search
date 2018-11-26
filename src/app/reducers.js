import { combineReducers } from 'redux';
import { SearchResultPageReducer } from '../containers/SearchResultPage/index';

const AppReducers = combineReducers({
    SearchResultPageReducer,
});

export default AppReducers;
