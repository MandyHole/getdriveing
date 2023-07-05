import React, { useState } from "react";
import styles from "../../styles/CreateUpdateTipForms.module.css";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CreateTipHero from "../../components/CreateTipHero";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import btnStyles from "../../styles/Buttons.module.css";

const CreateTipForm = () => {
  const setCurrentUser = useSetCurrentUser();

  const [createTipData, setCreateTipData] = useState({
    title: "",
    ability: "",
    category: "",
    screenshot: "",
    details: ""
  });
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const { title, ability, category, screenshot, details } = createTipData;

  const handleChange = (event) => {
    setCreateTipData({
      ...createTipData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/tips", createTipData);
      setCurrentUser(data.user);
      history.push("/my-profile");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };
  return (
    <div>
      <CreateTipHero />
      <Container fluid="lg">
        <Row>
          <Col lg="8">
            <Form onSubmit={handleSubmit} className={styles.FormMargin}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label className="d-none">Tip title</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Brief Overview of Tip"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label className={styles.Labels}>Select a Category</Form.Label>
        <Form.Check inline className={styles.Radio} type="radio" label="Forms" name="category" value={category} />
        <Form.Check
        inline
            type='radio'
            label='Drive/PDF'
            name="category"
            className={styles.Radio}
            value={category}
          />
                  <Form.Check
                  inline
            type='radio'
            label='Sheets'
            name="category"
            className={styles.Radio}
            value={category}
          />
                  <Form.Check
                  inline
            type='radio'
            label='Docs'
            name="category"
            className={styles.Radio}
            value={category}
          />
        <Form.Check
        inline
            type='radio'
            label='Slides'
            name="category"
            className={styles.Radio}
            value={category}
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label className={styles.Labels}>Select a Recommended Ability</Form.Label>
        <Form.Check inline className={styles.Radio} type="radio" label="Beginner+" name="ability" value={ability} />
        <Form.Check
        inline
            type='radio'
            label='Intermediate+'
            name="ability"
            className={styles.Radio}
            value={ability}
          />
                  <Form.Check
                  inline
            type='radio'
            label='Expert'
            name="ability"
            className={styles.Radio}
            value={ability}
          />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="d-none">Give details of your tip</Form.Label>
        <Form.Control className={styles.Input} as="textarea" rows={10} placeholder="Give details of your tip" value={details} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label className={styles.Labels}>Upload a screenshot to help demonstrate your tip (if applicable)</Form.Label>
        <Form.Control type="file" value={screenshot} />
      </Form.Group>
              <Button
                className={`${btnStyles.Buttons} ${btnStyles.Width}`}
                type="submit"
              >
                Create your tip
              </Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert variant="warning" key={idx} className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateTipForm;
