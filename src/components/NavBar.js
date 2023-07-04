import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/get-driveing-logo.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <div>
        <Navbar expand="lg" fixed="sticky" className={styles.NavBarBackground}>
      <Container>
        <Navbar.Brand><img src={logo} alt="logo" height="50" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link><i class="fa-solid fa-house"></i><span className={styles.NavLinkItems}>Home</span></Nav.Link>
            <Nav.Link><i class="fa-sharp fa-solid fa-circle-check"></i><span className={styles.NavLinkItems}>Tips</span></Nav.Link>
            <Nav.Link><i class="fa-solid fa-user"></i><span className={styles.NavLinkItems}>Sign In</span></Nav.Link>
            <Nav.Link><i class="fa-solid fa-users"></i><span className={styles.NavLinkItems}>Sign Up</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar