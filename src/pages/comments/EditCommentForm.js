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
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import HeroComponent from "../../components/HeroComponent";

const EditCommentForm = () => {
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(`/comments/${id}`)
            const {content, is_owner} = data;
            is_owner ? setCreateCommentData({content}) : (history.goBack())
        } catch(err) {
            console.log(err)
        }
    }
    handleMount()
  }, [history, id])
  const [createCommentData, setCreateCommentData] = useState({
    content: "",
  });
  const [errors, setErrors] = useState({});
  const { content } = createCommentData;
  
  const handleChange = (event) => {
    setCreateCommentData({
      ...createCommentData,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("content", content);
    try {
      await axiosReq.put(`/comments/${id}/`, formData);
      history.push('/');
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div>
      <HeroComponent  h1= {`Edit your Comment, ${currentUser?.username.charAt(0).toUpperCase()}${currentUser?.username.slice(1)}`} />
      <>
      <Container fluid="lg">
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <Form onSubmit={handleSubmit} className={styles.FormMarginTop}>
              <Form.Group className="mb-3" controlId="content">
                <Form.Label className="d-none">Comment</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Write a comment"
                  name="content"
                  value={content}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.content?.map((message, idx) => (
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
                </Button></div>
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

export default EditCommentForm;
