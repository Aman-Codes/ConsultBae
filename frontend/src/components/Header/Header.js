import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import consultBae from '../svg/consultBae.svg';

function Header() {
    return (
        <div>
            <Navbar expand="lg">
            <Navbar.Brand href="/"><img src={consultBae} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5 px-5">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/recruitment">Recruitment</Nav.Link>
                <Nav.Link href="/championcv">Champion CV</Nav.Link>
                <Nav.Link href="/careercounsel">Career Counsel</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;