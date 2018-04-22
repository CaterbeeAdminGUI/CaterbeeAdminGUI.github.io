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
                    <NavItem eventKey={2} href="/contact">
                    Meet the Team
                    </NavItem>
                </Nav>
                </Navbar>
        );
    }
}