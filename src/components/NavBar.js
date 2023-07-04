import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/get-driveing-logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Navbar expand="lg" fixed="top" className={styles.NavBarBackground}>
      <Container>
        <NavLink to='/' >
        <Navbar.Brand><img src={logo} alt="logo" height="50" /></Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <NavLink exact to='/' activeClassName={styles.Active}><i class="fa-solid fa-house"></i><span className={styles.NavLinkItems} >Home</span></NavLink>
            <NavLink to='/tips' activeClassName={styles.Active}><i class="fa-sharp fa-solid fa-circle-check"></i><span className={styles.NavLinkItems} >Tips</span></NavLink>
            <NavLink to='/sign-in' activeClassName={styles.Active}><i class="fa-solid fa-user"></i><span className={styles.NavLinkItems} activeClassName={styles.Active}>Sign In</span></NavLink>
            <NavLink to='/sign-up' activeClassName={styles.Active}><i class="fa-solid fa-users"></i><span className={styles.NavLinkItems} activeClassName={styles.Active}>Sign Up</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar