import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import consultBae from '../svg/consultBae.svg';
import './Header.css';

const Header = ({ children, match, history }) =>{
    const isActive = path => {
        if (match.path === path) {
            return { color: '#333' };
        } else {
            return { color: 'rgba(0,0,0,.5)' };
        }
    };

    const nav = () => (
        <div>
            <Navbar expand="lg" fixed="top" className="header-navbar">
            <Navbar.Brand href="/"><img src={consultBae} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/" style={isActive('/')} >Home</Nav.Link>
                <Nav.Link href="/recruitment" style={isActive('/')}>Recruitment</Nav.Link>
                <Nav.Link href="/championcv" style={isActive('/')}>Champion CV</Nav.Link>
                <Nav.Link href="/careercounsel" style={isActive('/')}>Career Counsel</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
    return (
        <Fragment>
            {nav()}
            <div>{children}</div>
        </Fragment>
    );
}

export default withRouter(Header);