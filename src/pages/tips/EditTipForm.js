import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/CreateEditTipForms.module.css";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import MyButtons from "../../components/MyButtons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import HeroComponent from "../../components/HeroComponent";
import DeleteModal from "../../components/DeleteModal";
import PageNotFound from "../PageNotFound";
import MySpinner from "../../components/MySpinner";

const EditTipForm = () => {
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tips, setTips] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/tips/${id}`);
        const { title, ability, category, screenshot, tip_content, is_owner } =
          data;
        setTips({ results: [data] });
        is_owner
          ? setCreateTipData({
              title,
              ability,
              category,
              screenshot,
              tip_content,
            })
          : history.push("/");
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    handleMount();
  }, [history, id]);
  const [createTipData, setCreateTipData] = useState({
    title: "",
    ability: "",
    category: "",
    screenshot: "",
    tip_content: "",
  });
  const [errors, setErrors] = useState({});
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

  const handleDeleteTip = async () => {
    try {
      await axiosRes.delete(`/tips/${id}/`);
      history.push("/");
    } catch (err) {
      // console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("ability", ability);
    formData.append("category", category);
    if (screenshotInput?.current.files[0]) {
      formData.append("screenshot", screenshotInput.current.files[0]);
    }
    formData.append("tip_content", tip_content);

    try {
      await axiosReq.put(`/tips/${id}/`, formData);
      history.push(`/tips/${id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div>
      {hasLoaded ? (
        <>
          {tips.results.length ? (
            <>
              <HeroComponent
                h1={`Edit your tip, ${currentUser?.username
                  .charAt(0)
                  .toUpperCase()}${currentUser?.username.slice(1)}`}
              />{" "}
              <>
                <Container fluid="lg">
                  <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                      <DeleteModal
                        title="Warning"
                        text="Please note that this cannot be undone...are you sure you want to delete this tip? "
                        button_onclick={handleDeleteTip}
                        button_text="Delete Tip"
                        show={show}
                        handleClose={handleClose}
                      />

                      <Form
                        onSubmit={handleSubmit}
                        className={styles.FormMargin}
                      >
                        <Form.Group className="mb-3" controlId="title">
                          <Form.Label className={styles.Labels}>
                            Title
                          </Form.Label>
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
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Label className={styles.Labels}>
                            Select a Category
                          </Form.Label>
                          <div className={styles.Center}>
                            {category === "drive_pdf" && (
                              <Form.Check
                                defaultChecked
                                type="radio"
                                label="Drive/PDFs"
                                name="category"
                                className={styles.Radio}
                                value="drive_pdf"
                                onChange={handleChangeCategory}
                                ref={categoryInput}
                                aria-label="Drive and PDF"
                              />
                            )}
                            {category !== "drive_pdf" && (
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
                            )}

                            {category === "sheets" && (
                              <Form.Check
                                defaultChecked
                                type="radio"
                                label="Sheets"
                                name="category"
                                className={styles.Radio}
                                value="sheets"
                                onChange={handleChangeCategory}
                                ref={categoryInput}
                                aria-label="Sheets"
                              />
                            )}
                            {category !== "sheets" && (
                              <Form.Check
                                type="radio"
                                label="Sheets"
                                name="category"
                                className={styles.Radio}
                                value="sheets"
                                onChange={handleChangeCategory}
                                ref={categoryInput}
                                aria-label="Sheets"
                              />
                            )}
                          </div>{" "}
                          <div className={styles.Center}>
                            {category === "docs" && (
                              <Form.Check
                                defaultChecked
                                type="radio"
                                label="Docs"
                                name="category"
                                className={styles.Radio}
                                value="docs"
                                onChange={handleChangeCategory}
                                ref={categoryInput}
                                aria-label="Docs"
                              />
                            )}

                            {category !== "docs" && (
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
                            )}
                            {category === "slides" && (
                              <Form.Check
                                defaultChecked
                                type="radio"
                                label="Slides"
                                name="category"
                                className={styles.Radio}
                                value="slides"
                                onChange={handleChangeCategory}
                                ref={categoryInput}
                                aria-label="Slides"
                              />
                            )}
                            {category !== "slides" && (
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
                            )}
                            {category !== "forms" && (
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
                            )}
                            {category === "forms" && (
                              <Form.Check
                                defaultChecked
                                className={styles.Radio}
                                type="radio"
                                label="Forms"
                                name="category"
                                value="forms"
                                onChange={handleChangeCategory}
                                ref={categoryInput}
                                aria-label="Forms"
                              />
                            )}
                          </div>
                        </Form.Group>
                        {errors.category?.map((message, idx) => (
                          <Alert variant="warning" key={idx}>
                            {message}
                          </Alert>
                        ))}
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Label className={styles.Labels}>
                            Select a Recommended Ability
                          </Form.Label>
                          <div className={styles.Center}>
                            {ability === "beginner" && (
                              <Form.Check
                                defaultChecked
                                className={styles.Radio}
                                type="radio"
                                label="Beginner"
                                name="ability"
                                value="beginner"
                                onChange={handleChangeAbility}
                                ref={abilityInput}
                                aria-label="Beginner"
                              />
                            )}

                            {ability !== "beginner" && (
                              <Form.Check
                                className={styles.Radio}
                                type="radio"
                                label="Beginner"
                                name="ability"
                                value="beginner"
                                onChange={handleChangeAbility}
                                ref={abilityInput}
                                aria-label="Beginner"
                              />
                            )}
                          </div>
                          <div className={styles.Center}>
                            {ability === "intermediate" && (
                              <Form.Check
                                defaultChecked
                                type="radio"
                                label="Intermediate"
                                name="ability"
                                className={styles.Radio}
                                value="intermediate"
                                onChange={handleChangeAbility}
                                ref={abilityInput}
                                aria-label="Intermediate"
                              />
                            )}

                            {ability !== "intermediate" && (
                              <Form.Check
                                type="radio"
                                label="Intermediate"
                                name="ability"
                                className={styles.Radio}
                                value="intermediate"
                                onChange={handleChangeAbility}
                                ref={abilityInput}
                                aria-label="Intermediate"
                              />
                            )}
                          </div>{" "}
                          <div className={styles.Center}>
                            {ability === "advanced" && (
                              <Form.Check
                                defaultChecked
                                type="radio"
                                label="Advanced"
                                name="ability"
                                value="advanced"
                                className={styles.Radio}
                                onChange={handleChangeAbility}
                                ref={abilityInput}
                                aria-label="Advanced"
                              />
                            )}
                            {ability !== "advanced" && (
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
                            )}
                          </div>
                        </Form.Group>
                        {errors.ability?.map((message, idx) => (
                          <Alert variant="warning" key={idx}>
                            {message}
                          </Alert>
                        ))}
                        <Form.Group className="mb-3" controlId="tip_content">
                          <Form.Label className={styles.Labels}>
                            Your tip
                          </Form.Label>
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
                        <Form.Group
                          controlId="screenshot_upload"
                          className="mb-3"
                        >
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
                        <MyButtons text="Save Changes" submit />{" "}
                        <MyButtons
                          grey
                          text="Cancel"
                          on_click={() => history.goBack()}
                        />
                        <MyButtons
                          grey
                          text="Delete Tip"
                          on_click={handleShow}
                        />
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
            </>
          ) : (
            <div>
              <PageNotFound />
            </div>
          )}
        </>
      ) : (
        <MySpinner full_page />
      )}
    </div>
  );
};

export default EditTipForm;
