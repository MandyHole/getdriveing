import React, { useState } from "react";
import heroStyles from "../../styles/HeroComponent.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Buttons.module.css";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import styles from "../../styles/SignInUpPages.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useSetCurrentUser, useCurrentUser } from "../../contexts/CurrentUserContext";

const SignInPage = () => {
  const setCurrentUser = useSetCurrentUser();
  const currentUser = useCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const { username, password } = signInData;

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.push("/my-info");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
<>
    {currentUser ? (<>{history.push("/")}</>) : (<>
      <div className={`${heroStyles.BoxBackground} ${heroStyles.FullHeight}`}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Sign In</h1>
          </Col>
        </Row>
        <Row className={styles.MarginTop}>
          <Col lg={{ span: 4, offset: 4 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label className="d-none">username</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label className="d-none">password</Form.Label>

                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Button
                className={`${btnStyles.Buttons} ${btnStyles.Width}`}
                type="submit"
              >
                Sign in
              </Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert variant="warning" key={idx} className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4, offset: 4 }} className={styles.SignIn}>
            <p>
              Don't have an account?
              <br />
              <Link className={styles.Links} to="/sign-up">
                Click here to Sign Up
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div></>
    )}

    </>
  );
};

export default SignInPage;
