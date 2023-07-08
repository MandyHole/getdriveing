import React from "react";
import styles from "../styles/HeroBox.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import btnStyles from "../styles/Buttons.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Link } from "react-router-dom";


const HeroBox = () => {
  const currentUser = useCurrentUser();

  const loggedInContent = (
    <>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h2>Welcome, {currentUser?.username.charAt(0).toUpperCase()}{currentUser?.username.slice(1)}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className={btnStyles.HeroButtonBox}>
          <Link to="/tips/create">
          <Button
            size="lg"
            variant="dark"
            className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
          >
            Create a Tip
          </Button></Link>
          <Link to="/my-info">
          <Button
            size="lg"
            variant="dark"
            className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
          >
            My Info
          </Button></Link>
        </Col>
      </Row>
    </>
  );

  const loggedOutContent = (
    <>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h2>Create a free account to create, save and rate content!</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className={btnStyles.HeroButtonBox}>
          <Link to="/sign-up">
          <Button
            size="lg"
            variant="dark"
            className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
          >
            Sign Up
          </Button></Link>
          <Link to="/sign-in">
          <Button
            size="lg"
            variant="dark"
            className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
          >
            Sign In
          </Button></Link>
        </Col>
      </Row>
    </>
  );
  return (
    <div className={styles.BoxBackground}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Make the most of Google Drive Workplace</h1>
          </Col>
        </Row>
        {currentUser ? loggedInContent : loggedOutContent}
      </Container>
    </div>
  );
};

export default HeroBox;
