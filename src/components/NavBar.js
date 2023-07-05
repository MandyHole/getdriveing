import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/get-driveing-logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";
import ClickOutsideToggle from "../hooks/ClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const {expanded, setExpanded, ref} = ClickOutsideToggle();




  const signedInMenu = (
    <>
      {" "}
      <NavLink exact to="/tips/create" activeClassName={styles.Active}>
        <i class="fa-solid fa-circle-plus"></i>
        <span className={styles.NavLinkItems} activeClassName={styles.Active}>
          Create a Tip
        </span>
      </NavLink>
      <NavLink exact to="/my-info" activeClassName={styles.Active}>
        <i class="fa-solid fa-user"></i>
        <span className={styles.NavLinkItems} activeClassName={styles.Active}>
          My Info
        </span>
      </NavLink>
      <NavLink exact to="/" onClick={handleSignOut}>
        <i class="fa-solid fa-right-from-bracket"></i>
        <span className={styles.NavLinkItems} activeClassName={styles.Active}>
          Logout
        </span>
      </NavLink>
    </>
  );

  const loggedOutMenu = (
    <>
      {" "}
      <NavLink exact to="/sign-in" activeClassName={styles.Active}>
        <i class="fa-solid fa-user"></i>
        <span className={styles.NavLinkItems} activeClassName={styles.Active}>
          Sign In
        </span>
      </NavLink>
      <NavLink exact to="/sign-up" activeClassName={styles.Active}>
        <i class="fa-solid fa-users"></i>
        <span className={styles.NavLinkItems} activeClassName={styles.Active}>
          Sign Up
        </span>
      </NavLink>
    </>
  );

  return (
    <div>
      <Navbar
        expanded={expanded}
        expand="lg"
        fixed="top"
        className={styles.NavBarBackground}
      >
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" height="50" />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            ref={ref}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-auto">
              <NavLink exact to="/" activeClassName={styles.Active}>
                <i class="fa-solid fa-house"></i>
                <span className={styles.NavLinkItems}>Home</span>
              </NavLink>
              <NavLink exact to="/tips" activeClassName={styles.Active}>
                <i class="fa-sharp fa-solid fa-circle-check"></i>
                <span className={styles.NavLinkItems}>Tips</span>
              </NavLink>
              {currentUser ? signedInMenu : loggedOutMenu}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
