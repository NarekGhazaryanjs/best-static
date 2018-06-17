import React, { Component } from 'react';
import {
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
            <NavItem eventKey={1}  href="/news" >
                  News
            </NavItem>
            
            <NavItem eventKey={2}  href="/story">
            Story    
            </NavItem>
            
            <NavItem eventKey={3}  href="/web-quizess">
            Web Quizzes
            </NavItem>


            <NavItem eventKey={3}  href="/about">
            About Web
               
            </NavItem>
                       
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/contacts">Contacts
                          
      </NavItem>
                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;