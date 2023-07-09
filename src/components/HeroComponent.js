import React from "react";
import styles from "../styles/HeroBox.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import btnStyles from "../styles/Buttons.module.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

 function HeroBoxComponent (props) {
    const { h1, h2, h3, h3_2, button1, button2, additional_class, setTips } = props;
  return (
    <div className={`${styles.BoxBackground} ${additional_class}`}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
            <h3>{h3}</h3>
            <h3>{h3_2}</h3>
            
                            {/* <div className={btnStyles.HeroButtonBox}>
        
                            <Link to="/sign-up">
                                  <Button
                                    size="lg"
                                    variant="dark"
                                    className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
                                  >
                                    {button1}
                                  </Button></Link>
                                  <Link to="/sign-in">
                                  <Button
                                    size="lg"
                                    variant="dark"
                                    className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
                                  >
                                    {button2}
                                  </Button></Link>
                                  </div> */}
   

            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBoxComponent;
