import React from 'react'
import HeroBox from '../components/HeroBox'
import TipsFeed from '../components/TipsFeed'
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import styles from "../styles/Homepage.module.css"
import { useCurrentUser } from '../contexts/CurrentUserContext';
import btnStyles from "../styles/Buttons.module.css";
import { Link } from "react-router-dom";

const Homepage = () => {
    const currentUser = useCurrentUser()
  return (
    <>
        <HeroBox />
        <Row>
        <Col md={{ span: 8, offset: 1 }} className={styles.TipContent}>
        <TipsFeed />
        </Col>

<Col md={{ span: 3 }} className={styles.RightSidebar}>

    {currentUser &&

    // IMPORT AUTHOR CONTENT HERE
  <h1>My Profile</h1>}

  {!currentUser && <>
  <h4 className={styles.Heading}>Benefits to having an account</h4>
  <p className={styles.Text}>You can:
  <ul>
    <li>Save useful tips so you can easily refer to them again</li>
    <li>Share your own tips to help others</li>
    <li>Rate tips to help others find the most useful information</li>
  </ul></p>
  <div className={styles.Center}>
  <Link to="/sign-up">
  <Button
    size="lg"
    variant="dark"
    className={`${btnStyles.GreenButtons}`}
  >
    Sign Up
  </Button></Link></div><div className={styles.Center}>
  <Link to="/sign-in">
  <Button
    size="lg"
    variant="dark"
    className={`${btnStyles.GreenButtons}`}
  >
    Sign In
  </Button></Link></div></>
  }
  


</Col>
</Row>
    </>
  )
}

export default Homepage