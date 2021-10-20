import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../logo.png';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={HashLink} to="/"><img src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='active' as={HashLink} to="/">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user.email &&
                            <Nav.Link>Hi, {user.displayName}</Nav.Link>
                        }
                        {user.email ?
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
                            : <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;