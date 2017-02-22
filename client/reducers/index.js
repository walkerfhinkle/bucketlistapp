import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
import bucketListReducer from './reducer_bucketlist';
import SelectedBand from './reducer_selectedband'

//Define the properties of our Application State here
const rootReducer = combineReducers({
	bands: BandsReducer,
	bucketlist: BucketListReducer,
	SelectedBand: SelectedBand
});

export default rootReducer;