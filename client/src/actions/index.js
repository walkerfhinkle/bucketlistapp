//Action Constant Names
const SELECT_BAND = 'SELECT_BAND';

export function selectBand(band) {
	console.log("You have selected:", band.name);
	return {
		type: 'SELECT_BAND',
		payload: band
	};
}