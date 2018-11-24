import { combineReducers } from 'redux';
import { SearchPageReducer } from '../containers/SearchPage/index';

const AppReducers = combineReducers({
    SearchPageReducer,
});

export default AppReducers;
