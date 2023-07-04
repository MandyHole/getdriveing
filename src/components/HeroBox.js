import React from "react";
import styles from "../styles/HeroBox.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

const HeroBox = () => {
  return (
    <div className={styles.BoxBackground}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Make the most of Google Drive Workplace</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h2>Create a free account to create, save and rate content!</h2>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className={styles.HeroButtonBox}>
            <Button variant="primary" size="lg" className={styles.HeroButtons}>Sign Up</Button> <Button variant="primary" size="lg" className={styles.HeroButtons}>Sign In</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBox;
