import React from "react";
import styles from "../styles/HeroBox.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import btnStyles from "../styles/Buttons.module.css";
import { Link } from "react-router-dom";

 function HeroBoxComponent (props) {
    const { h1, h2, h3, h3_2, button1, button2, additional_class, link1, link2 } = props;
  return (
    <div className={`${styles.BoxBackground} ${additional_class}`}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
            <h3>{h3}</h3>
            <h3>{h3_2}</h3>
            
                            <div className={btnStyles.HeroButtonBox}>
        
                            <Link to={link1}>
                                    {button1}
                                  </Link>
                                  <Link to={link2}>
                                    {button2}
                                 </Link>
                                  </div>
   

            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBoxComponent;
