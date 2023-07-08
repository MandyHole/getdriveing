import React from "react";
import styles from "../styles/HeroBox.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import btnStyles from "../styles/Buttons.module.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const HeroBoxComponent = ({fullheight, h1, h2, h3, h3_2, buttonrow=false}) => {
  return (
    <div className={`${styles.BoxBackground} ${fullheight}`}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
            <h3>{h3}</h3>
            <h3>{h3_2}</h3>

            {/* if {buttonrow}=true {
                            <div className={btnStyles.HeroButtonBox}>
        
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
                                  </div>
            } else <></> */}

            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBoxComponent;
