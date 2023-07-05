import React, { useState }  from "react";
import heroStyles from "../../styles/HeroBox.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../styles/Buttons.module.css"
import Alert from "react-bootstrap/Alert"
import Form from "react-bootstrap/Form";
import styles from "../../styles/SignInUpPages.module.css"
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {

    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: ''
    }
    );
    const [errors, setErrors] = useState({})

    const history = useHistory()
    const {username, password1, password2} = signUpData;

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post('dj-rest-auth/registration/', signUpData);
        history.push('/signin')
      } catch (err) {
        setErrors(err.response?.data);
      }
    };


  return (
    <div className={`${heroStyles.BoxBackground} ${heroStyles.FullHeight}`}>
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Sign Up</h1>
        </Col>
      </Row>
      <Row className={styles.MarginTop}>
        <Col lg={{ span: 4, offset: 4 }}>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label className="d-none">username</Form.Label>
        <Form.Control className={styles.Input} type="text" placeholder="Username" name="username" value={username} onChange={handleChange}/>
      </Form.Group>
      {errors.username?.map((message, idx) =>(
      <Alert variant="warning" key={idx}>{message}</Alert>))}
      <Form.Group className="mb-3" controlId="password1">
      <Form.Label className="d-none">password1</Form.Label>

        <Form.Control className={styles.Input} type="password" placeholder="Password" name="password1" value={password1} onChange={handleChange} />
      </Form.Group>
      {errors.password1?.map((message, idx) =>(
      <Alert variant="warning" key={idx}>{message}</Alert>))}
      <Form.Group className="mb-3" controlId="password2">
      <Form.Label className="d-none">password confirmation</Form.Label>

        <Form.Control className={styles.Input} type="password" placeholder="Re-enter your password" name="password2" value={password2} onChange={handleChange} />
      </Form.Group>
      {errors.password2?.map((message, idx) =>(
      <Alert variant="warning" key={idx}>{message}</Alert>))}
      <Button className={`${btnStyles.Buttons} ${btnStyles.Width}`} type="submit">
        Sign Up
      </Button>
      {errors.non_field_errors?.map((message, idx) => (
      <Alert variant="warning" key={idx}  className="mt-3">{message}</Alert>))}
    </Form>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, offset: 4 }} className={styles.SignIn}>
            <p>Already have an account?<br/><Link className={styles.Links} to='/sign-in'>Click here to Sign In</Link></p>
            </Col></Row>
    </Container>
  </div>
  );
};

export default SignUpPage;
