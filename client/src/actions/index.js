import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, CREATE_POSTS } from './types';
import authReducer from '../reducers/auth_reducer';

const ROOT_URL = 'http://localhost:3000';

var config = {
	headers: { authorization: localStorage.getItem('token') }
}

export function signupUser({ email, password }) {
	return function(dispatch) {
		//Submit email/password to server
		axios.post(`${ROOT_URL}/signup`, {email, password})
			.then(response => {
				dispatch({ type: AUTH_USER });

				localStorage.setItem('token', response.data.token);
				browserHistory.push('/newitem');
			})
			.catch(response => dispatch(authError(response.data.error)));
	}
}

export function signinUser({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
			.then(response => {
				dispatch({ type: AUTH_USER });

				localStorage.setItem('token', response.data.token);
				browserHistory.push('/newitem');
			})
			.catch(response => dispatch(authError("You got some bad login info")));
	}
}

export function signoutUser(){
	localStorage.removeItem('token');

	return {type: UNAUTH_USER};
}

export function createPost(props) {
	return function(dispatch){
		axios.pos(`${ROOT_URL}/newitem`, { props }, config )
			.then(request => {
				dispatch({
					type: CREATE_POSTS,
					payload: request
				});
				browserHistory.push('/items');
			});
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}


// //Action Constant Names
// const SELECT_BAND = 'SELECT_BAND';

// export function selectBand(band) {
// 	console.log("You have selected:", band.name);
// 	return {
// 		type: 'SELECT_BAND',
// 		payload: band
// 	};
// }