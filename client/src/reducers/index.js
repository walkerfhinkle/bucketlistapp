import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';

	const rootReducer = combineReducers({
		bands: BandsReducer,
	});

	export default rootReducer;