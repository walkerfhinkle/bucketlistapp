import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, Collapsiblenav} from 'react-bootstrap';

	class NavBarHeader extends Component {
		render() {
			return (
				<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">React-Bootstrap</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="#">Link</NavItem>
					<NavItem eventKey={2} href="#">Link</NavItem>
					<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}>Action</MenuItem>
						<MenuItem eventKey={3.2}>Another Action</MenuItem>
						<MenuItem eventKey={3.3}>Something Else</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.3}>Separated Link</MenuItem>
					</NavDropdown>
				</Nav>
				</Navbar>
			);
		}
	}

	export default NavBarHeader;