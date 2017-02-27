import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
	handleFormSubmit(formProps){
		this.props.signoutUser(formProps);
	}

	renderAlert(){
		if (this.props.errorMessage) {
			//Sign up error
			return(
				<div className="alert alert-danger">
					<strong>Sorry Partner! </strong>{this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
			return(
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<fieldset className="form-group">
						<label>Email:</label>
						<input {...email} className="form-control" />
						{email.touched && email.error && <div className="error">{email.error}</div>}
					</fieldset>
					<fieldset className="form-group">
						<label>Password:</label>
						<input {...password} type="password" className="form-control" />
						{password.error}
					</fieldset>
					<fieldset className="form-group">
						<label>Confirm Password</label>
						<input className="form-control" {...passwordConfirm} type="password" />
						{password.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
					</fieldset>
						{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Sign In</button>
			</form>
		);	
	}
}

function validate(formProps){
	const errors = {};

	if (!formProps.email) {
		errors.email = 'Please enter an email address';
	}
	if (!formProps.password) {
		errors.password = 'Please enter a password';
	}
	if (!formProps.passwordConfirm) {
		errors.passwordConfirm = 'Please confirm your password';
	}
	if (formProps.password !== formProps.passwordConfirm) {
		errors.password = 'Passwords must match';
	}

	console.log(formProps)
	return errors;
}

function mapStateToProps(state){
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passwordConfirm'],
	validate: validate
}, mapStateToProps, actions)(Signup);