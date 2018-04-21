import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default class CustomNavbar extends React.Component {
    render() {
        return(
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/">CaterbeeAdminGUI</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/follow-the-project">
                    Follow the Project
                    </NavItem>
                    <NavItem eventKey={2} href="/about-us">
                    About Us
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                </Navbar>
        );
    }
}