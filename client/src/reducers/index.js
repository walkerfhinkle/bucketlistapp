import { combineReducers } from 'redux';
// import BandsReducer from './reducer_bands';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
// import {
// 	AUTH_USER,
// 	UNAUTH_USER
// } from '../actions/types';

const rootReducer = combineReducers({
	form: formReducer,
	auth: authReducer
});

export default rootReducer;