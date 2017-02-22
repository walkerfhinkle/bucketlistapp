import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
import { reducer as formReducer } from 'redux-form';

	const rootReducer = combineReducers({
		form: formReducer
	});

	export default rootReducer;