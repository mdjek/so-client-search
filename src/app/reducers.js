// import AppHistory from '../app/history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import AppReducer from '../app/reducer';
import { MainReducer } from '../containers/Main/index';
import { SearchReducer } from '../containers/Search/index';
import { QuestionReducer } from '../containers/Question/index';

const AppReducers = (history) => (
    combineReducers({
        router: connectRouter(history),
        AppReducer,
        MainReducer,
        SearchReducer,
        QuestionReducer,
    })
);

export default AppReducers;
