// components/NavBar.jsx

import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class NavBar extends Component {


  render() {
    var styles = {margin: 0, color: "white", fontWeight: 'bold',}
    return (
      <Navbar collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
          <img src="/icon.png" alt=""/>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav >
            <LinkContainer to="/home">
              <NavItem eventKey={1} ><p style={styles}>Home</p></NavItem>
            </LinkContainer>
            <LinkContainer to="/follow-the-project">
              <NavItem eventKey={2} ><p style={styles}>Follow the Project</p></NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={3} ><p style={styles}>About Us</p></NavItem>
            </LinkContainer>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;