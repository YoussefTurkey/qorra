import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png'

const Header = () => (
    <>
        <Navbar className='navbar' expand="lg">
            <Container>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Brand href="#">
                    <img src={logo} alt="قراء" />
                </Navbar.Brand>
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#team">فريقنا</Nav.Link>
                        <Nav.Link href="#excellence">أهدافنا</Nav.Link>
                        <Nav.Link href="#last_news" id='news'>أخر الأخبار</Nav.Link>
                        <Nav.Link href="#" id='top_screen' className='active'>الرئيسية</Nav.Link>
                    </Nav>

                    <a href='/join/login' className="btn btn-outline-primary join">
                        شارك معنا
                    </a>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </>
)

export default Header