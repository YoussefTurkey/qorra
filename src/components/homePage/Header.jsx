import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/qorra.png'

const Header = () => (
    <>
        <Navbar className='navbar' expand="lg">
            <Container>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Brand id='top_screen'>
                    <img src={logo} alt="قراء" />
                </Navbar.Brand>
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="/contact">راسلنا</Nav.Link>
                        <Nav.Link href="/leaders">المتطوعون</Nav.Link>
                        <Nav.Link href="/gareda">الجريدة</Nav.Link>
                        <Nav.Link href="/we">من نحن</Nav.Link>
                        <Nav.Link href="/">الرئيسية</Nav.Link>
                    </Nav>

                    <a href='/join/login' className="btn btn-outline-primary join">
                        تطوع معنا
                    </a>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </>
)

export default Header