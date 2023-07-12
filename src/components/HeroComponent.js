import React from "react";
import styles from "../styles/HeroComponent.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import btnStyles from "../styles/Buttons.module.css";
import { Link } from "react-router-dom";

 function HeroBoxComponent (props) {
    const { h1, h2, h3, h3_2, additional_class, homepage_logged_in, signinbuttons, star1, star2, star3, star4, star5, tipDetail } = props;
  return (
    <div className={`${styles.BoxBackground} ${additional_class}`}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
            <h3>{h3}
            
            {homepage_logged_in ? (<> <div className={btnStyles.CenterButtons}>
          <Link to="/tips/create">
          <Button
            className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
          >
            Add a Tip
          </Button></Link>
          <Link to="/my-info">
          <Button
            className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
          >
            My Info
          </Button></Link>
        </div></>): (null)}

        {signinbuttons ? (<div md={{ span: 8, offset: 2 }} className={btnStyles.CenterButtons}>
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
        </div>): (null)}
        
        {tipDetail? (<><i className={`${star1} ${styles.Star}`} /><i className={`${star2} ${styles.Star}`} /> <i className={`${star3} ${styles.Star}`} /> <i className={`${star4} ${styles.Star}`} /> <i className={`${star5} ${styles.Star}`} /></>)
          : (null) }


        
        </h3>
        {tipDetail? (<h3>{h3_2}</h3>): (null)}
            
                     

            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBoxComponent;
