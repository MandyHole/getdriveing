import React, { useState, useRef, useEffect } from "react";
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
} from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import btnStyles from "../../styles/Buttons.module.css";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import HeroComponent from "../../components/HeroComponent";
import DeleteModal from "../../components/DeleteModal";
import appStyles from "../../App.module.css"

const EditTipForm = () => {
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(`/tips/${id}`)
            const {title, ability, category, screenshot, tip_content, is_owner} = data;
            is_owner ? (setCreateTipData({title, ability, category, screenshot, tip_content})) : (history.push("/"))
        } catch(err) {
            console.log(err)
        }
    }
    handleMount()
  }, [history, id])
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
      await axiosRes.delete(`/tips/${id}/`)
      history.push('/');
  } catch (err) {
    console.log(err)
  }};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("ability", ability);
    formData.append("category", category);
    if (screenshotInput?.current.files[0]) {
    formData.append("screenshot", screenshotInput.current.files[0]);}
    formData.append("tip_content", tip_content);

    try {
      await axiosReq.put(`/tips/${id}/`, formData);
      history.push(`/tips/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div>
      <HeroComponent  h1= {`Edit your tip, ${currentUser?.username.charAt(0).toUpperCase()}${currentUser?.username.slice(1)}`} />
      <>
      <Container fluid="lg">
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
          
              <DeleteModal 
              title="Warning" 
              text ="Please note that this cannot be undone...are you sure you want to delete this tip? " 
              button_onclick = {handleDeleteTip}
              button_text = "Delete Tip"
              show={show} 
              handleClose={handleClose} />

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
                {category === "drive_pdf" && <Form.Check
                    inline
                    defaultChecked
                    type="radio"
                    label="Drive/PDFs"
                    name="category"
                    className={styles.Radio}
                    value="drive_pdf"
                    onChange={handleChangeCategory}
                    ref={categoryInput}
                  />}
                    {category !== "drive_pdf" && <Form.Check
                    inline
                    type="radio"
                    label="Drive/PDFs"
                    name="category"
                    className={styles.Radio}
                    value="drive_pdf"
                    onChange={handleChangeCategory}
                    ref={categoryInput}
                  />}

                  {category === "sheets" && <Form.Check
                    inline
                    defaultChecked
                    type="radio"
                    label="Sheets"
                    name="category"
                    className={styles.Radio}
                    value="sheets"
                    onChange={handleChangeCategory}     
                    ref={categoryInput}
    
                    />}
                    {category !== "sheets" && <Form.Check
                    inline
                    type="radio"
                    label="Sheets"
                    name="category"
                    className={styles.Radio}
                    value="sheets"
                    onChange={handleChangeCategory}     
                    ref={categoryInput}
    
                    />}

                    {category === "docs" && <Form.Check
                    inline
                    defaultChecked
                    type="radio"
                    label="Docs"
                    name="category"
                    className={styles.Radio}
                    value="docs"
                    onChange={handleChangeCategory}
                    ref={categoryInput}/>}
                  
                  {category !== "docs" && <Form.Check
                    inline
                    type="radio"
                    label="Docs"
                    name="category"
                    className={styles.Radio}
                    value="docs"
                    onChange={handleChangeCategory}
                    ref={categoryInput}/>}
                  {category === "slides" && 
                  <Form.Check
                    inline
                    defaultChecked
                    type="radio"
                    label="Slides"
                    name="category"
                    className={styles.Radio}
                    value="slides"
                    onChange={handleChangeCategory}
                    ref={categoryInput}
                  />}
                  {category !== "slides" && 
                  <Form.Check
                    inline
                    type="radio"
                    label="Slides"
                    name="category"
                    className={styles.Radio}
                    value="slides"
                    onChange={handleChangeCategory}
                    ref={categoryInput}
                  />}
{category !== "forms" &&
                  <Form.Check
                    inline
                    className={styles.Radio}
                    type="radio"
                    label="Forms"
                    name="category"
                    value="forms"
                    onChange={handleChangeCategory}
                    ref={categoryInput}
                  />}
                  {category === "forms" &&
                  <Form.Check
                    inline
                    defaultChecked
                    className={styles.Radio}
                    type="radio"
                    label="Forms"
                    name="category"
                    value="forms"
                    onChange={handleChangeCategory}
                    ref={categoryInput}
                  />}
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

                  {ability === "beginner" && 
                  <Form.Check
                    inline
                    defaultChecked
                    className={styles.Radio}
                    type="radio"
                    label="Beginner+"
                    name="ability"
                    value="beginner"
                    onChange={handleChangeAbility}
                    ref={abilityInput}
                  />}

{ability !== "beginner" && 
                  <Form.Check
                    inline
                    className={styles.Radio}
                    type="radio"
                    label="Beginner+"
                    name="ability"
                    value="beginner"
                    onChange={handleChangeAbility}
                    ref={abilityInput}
                  />}

{ ability === "intermediate" && 
                  <Form.Check
                    inline
                    defaultChecked
                    type="radio"
                    label="Intermediate+"
                    name="ability"
                    className={styles.Radio}
                    value="intermediate"
                    onChange={handleChangeAbility}
                    ref={abilityInput}
                  />}

{ ability !== "intermediate" && 
                  <Form.Check
                    inline
                    type="radio"
                    label="Intermediate+"
                    name="ability"
                    className={styles.Radio}
                    value="intermediate"
                    onChange={handleChangeAbility}
                    ref={abilityInput}
                  />}

{ ability === "advanced" && 
                  <Form.Check
                  defaultChecked
                    inline
                    type="radio"
                    label="Advanced"
                    name="ability"
                    value="advanced"
                    className={styles.Radio}
                    onChange={handleChangeAbility}
                    ref={abilityInput}
                  />}
{ ability !== "advanced" && 
                  <Form.Check
                    inline
                    type="radio"
                    label="Advanced"
                    name="ability"
                    value="advanced"
                    className={styles.Radio}
                    onChange={handleChangeAbility}
                    ref={abilityInput}
                  />}

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
                  Save changes
                </Button>
                <Button
                  className={`${btnStyles.Buttons} ${btnStyles.HeroButtons}`}
                onClick={() => history.goBack()}                >
                  Cancel
                </Button>
      
              <Button className={`${btnStyles.Buttons} ${btnStyles.HeroButtons}`} onClick={handleShow}>Delete Tip</Button>
          



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

    </div>
  );
};

export default EditTipForm;
