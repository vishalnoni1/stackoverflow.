import { combineReducers } from 'redux';
import authReducer from './auth';
import currentUserReducer  from './currentUser';
import questionsReducer from '../reducers/questions';
import usersReducer from '../reducers/users'
export default combineReducers({ authReducer,currentUserReducer,questionsReducer ,usersReducer
});