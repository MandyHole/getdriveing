import React from "react";
import styles from "../styles/HeroBox.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import btnStyles from "../styles/Buttons.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

const CreateTipHero = () => {
  const currentUser = useCurrentUser();

  const loggedInContent = (
    <>
    <div className={styles.BoxBackground}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Create a Tip, {currentUser?.username.charAt(0).toUpperCase()}{currentUser?.username.slice(1)}</h1>
          </Col>
        </Row>

      </Container>
      </div>
      </>
  );

  const loggedOutContent = (
    <>
     <div className={`${styles.BoxBackground} ${styles.FullHeight}`}>
     <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>You need to sign in before you can create a tip</h1>
          </Col>
        </Row>
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
      </Container>
      </div>
    </>
  );
  return (
   <>
        {currentUser ? loggedInContent : loggedOutContent}
        </>
  );
};

export default CreateTipHero;
