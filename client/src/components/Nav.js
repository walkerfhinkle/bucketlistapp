import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, Collapsiblenav} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

	class NavBarHeader extends Component {

		renderLinks(){
			if(this.props.authenticated){
				return <NavItem href="/signout">Sign Out</NavItem>
			}else{
				return [
					<NavItem key={1} href="/signin">Sign In</NavItem>,
					<NavItem key={2} href="/signup">Sign Up</NavItem>
				];
			}
		}

		render() {
			return (
				<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">React-Bootstrap</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					{this.renderLinks()}
					<NavDropdown Key={3} title="Dropdown" id="basic-nav-dropdown">
						<MenuItem Key={3.1}>Action</MenuItem>
						<MenuItem Key={3.2}>Another Action</MenuItem>
						<MenuItem Key={3.3}>Something Else</MenuItem>
						<MenuItem divider />
						<MenuItem Key={3.3}>Separated Link</MenuItem>
					</NavDropdown>
				</Nav>
				</Navbar>
			);
		}
	}

	function mapStateToProps(state) {
		return {
			authenticated: state.auth.authenticated
		};
	}

	export default connect(mapStateToProps)(NavBarHeader);