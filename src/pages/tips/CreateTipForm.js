import React, { useState, useRef } from "react";
import styles from "../../styles/CreateUpdateTipForms.module.css";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import btnStyles from "../../styles/Buttons.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import HeroComponent from "../../components/HeroComponent";
import boxStyles from "../../styles/HeroComponent.module.css";
import appStyles from "../../App.module.css";

const CreateTipForm = () => {
  const setCurrentUser = useSetCurrentUser();
  const currentUser = useCurrentUser();

  const [createTipData, setCreateTipData] = useState({
    title: "",
    ability: "",
    category: "",
    screenshot: "",
    tip_content: "",
  });
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const { title, ability, category, screenshot, tip_content } = createTipData;

  const screenshotInput = useRef(null);
  const categoryInput = useRef(null);
  const abilityInput = useRef(null);

  const handleChange = (event) => {
    setCreateTipData({
      ...createTipData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeScreenshot = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(screenshot);
      setCreateTipData({
        ...createTipData,
        screenshot: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChangeCategory = (event) => {
    if (event.target.ref !== null) {
      setCreateTipData({
        ...createTipData,
        category: event.target.value,
      });
    }
  };

  const handleChangeAbility = (event) => {
    if (event.target.input !== null) {
      setCreateTipData({
        ...createTipData,
        ability: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("ability", ability);
    formData.append("category", category);
    formData.append("screenshot", screenshotInput.current.files[0]);
    formData.append("tip_content", tip_content);

    try {
      const { data } = await axiosReq.post("/tips/", formData);
      setCurrentUser(data.user);
      history.push(`/tips/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const tipForm = (
    <>
      <Container fluid="lg">
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <Form onSubmit={handleSubmit} className={styles.FormMargin}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label className={styles.Labels}>Title</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Provide a brief overview of your tip"
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
                <Form.Label className={styles.Labels}>
                  Select a Category
                </Form.Label>
                <div className={appStyles.Center}>
                  <Form.Check
                    type="radio"
                    label="Drive/PDFs"
                    name="category"
                    className={styles.Radio}
                    value="drive_pdf"
                    onChange={handleChangeCategory}
                    ref={categoryInput}
                    aria-label="Drive and PDF"
                  />
                  <Form.Check
                    type="radio"
                    label="Sheets"
                    name="category"
                    className={styles.Radio}
                    value="sheets"
                    onChange={handleChangeCategory}
                    ref={categoryInput}
                    aria-label="Google Sheets"
                  />
                  <Form.Check
                    type="radio"
                    label="Docs"
                    name="category"
                    className={styles.Radio}
                    value="docs"
                    onChange={handleChangeCategory}
                    ref={categoryInput}
                    aria-label="Docs"
                  />
                  <Form.Check
                    type="radio"
                    label="Slides"
                    name="category"
                    className={styles.Radio}
                    value="slides"
                    onChange={handleChangeCategory}
                    ref={categoryInput}
                    aria-label="Slides"
                  />
                  <Form.Check
                    className={styles.Radio}
                    type="radio"
                    label="Forms"
                    name="category"
                    value="forms"
                    onChange={handleChangeCategory}
                    ref={categoryInput}
                    aria-label="Forms"
                  />
                </div>
              </Form.Group>
              {errors.category?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label className={styles.Labels}>
                  Select a Recommended Ability
                </Form.Label>
                <div className={appStyles.Center}>
                  <Form.Check
                    className={styles.Radio}
                    type="radio"
                    label="Beginner+"
                    name="ability"
                    value="beginner"
                    onChange={handleChangeAbility}
                    ref={abilityInput}
                    aria-label="Beginner+"
                  />
                  <Form.Check
                    type="radio"
                    label="Intermediate+"
                    name="ability"
                    className={styles.Radio}
                    value="intermediate"
                    onChange={handleChangeAbility}
                    ref={abilityInput}
                    aria-label="Intermediate+"
                  />
                  <Form.Check
                    type="radio"
                    label="Advanced"
                    name="ability"
                    value="advanced"
                    className={styles.Radio}
                    onChange={handleChangeAbility}
                    ref={abilityInput}
                    aria-label="Advanced"
                  />
                </div>
              </Form.Group>
              {errors.ability?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Form.Group className="mb-3" controlId="tip_content">
                <Form.Label className={styles.Labels}>Your tip</Form.Label>
                <Form.Control
                  className={styles.Input}
                  as="textarea"
                  rows={10}
                  placeholder="Provide details of your tip"
                  value={tip_content}
                  onChange={handleChange}
                  name="tip_content"
                />
              </Form.Group>
              {errors.tip_content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="screenshot_upload" className="mb-3">
                <Form.Label className={styles.Labels}>
                  Upload a screenshot to help demonstrate your tip (if
                  applicable)
                </Form.Label>
                <Form.Control
                  className={`${styles.FileUpload} mx-auto d-block `}
                  type="file"
                  accept="image/*"
                  // id="screenshot_upload"
                  onChange={handleChangeScreenshot}
                  ref={screenshotInput}
                />
                {screenshot ? (
                  <Image
                    src={screenshot}
                    className={`${styles.Image} mx-auto d-block `}
                    thumbnail
                    fluid
                  />
                ) : (
                  <></>
                )}
              </Form.Group>

              {errors.screenshot?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div className={btnStyles.CenterButtons}>
                <Button
                  className={`${btnStyles.Buttons} ${btnStyles.HeroButtons}`}
                  type="submit"
                >
                  Create
                </Button>
                <Button
                  className={`${btnStyles.Buttons} ${btnStyles.HeroButtons}`}
                  onClick={() => history.goBack()}
                >
                  Cancel
                </Button>
              </div>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert variant="warning" key={idx} className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
  return (
    <div>
      {currentUser ? (
        <HeroComponent
          h1={`Create a Tip, ${currentUser?.username
            .charAt(0)
            .toUpperCase()}${currentUser?.username.slice(1)}`}
        />
      ) : (
        <HeroComponent
          h1="You need to sign in before you can create a tip"
          additional_class={boxStyles.FullHeight}
          h2="Create a free account to create, save and rate content!"
          signinbuttons
        />
      )}
      {currentUser ? tipForm : null}
    </div>
  );
};

export default CreateTipForm;
