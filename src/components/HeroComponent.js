import React from "react";
import styles from "../styles/HeroComponent.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import appStyles from "../App.module.css";
import MyButtons from "./MyButtons";

function HeroBoxComponent(props) {
  const {
    h1,
    h2,
    h3,
    h3_2,
    additional_class,
    not_found,
    homepage_logged_in,
    signinbuttons,
    star1,
    star2,
    star3,
    star4,
    star5,
    tipDetail,
  } = props;

  return (
    <header>
      <div className={`${styles.BoxBackground} ${additional_class}`}>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h1>{h1}</h1>
              <h2>{h2}</h2>
              <h3>
                {h3}

                {homepage_logged_in ? (
                  <>
                    <MyButtons my_info_btns />
                  </>
                ) : null}

                {signinbuttons ? <MyButtons sign_in_btns /> : null}

                {tipDetail ? (
                  <>
                    <div className={appStyles.Center}>
                      {star1} {star2} {star3} {star4} {star5}{" "}
                    </div>
                  </>
                ) : null}

                {not_found ? (
                  <>
                    <Link to="/">
                      <MyButtons grey text="Go to homepage" />
                    </Link>
                  </>
                ) : null}
              </h3>
              {tipDetail ? <h3>{h3_2}</h3> : null}
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default HeroBoxComponent;
