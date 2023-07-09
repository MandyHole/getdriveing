import React, { useEffect } from "react";
import boxStyles from "../../styles/HeroBox.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import styles from "../../styles/Tips.module.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import AuthorImage from "../../assets/blank-profile-picture-gb6ded336d_640.png";
import btnStyles from "../../styles/Buttons.module.css"
import StarRating from "../../components/StarRating";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import Figure from "react-bootstrap/Figure";
import { axiosReq } from "../../api/axiosDefaults";
import HeroBoxComponent from "../../components/HeroBoxComponent";
import SignInSignUpButtons from "../../components/SignInSignUpButtons";
import Tips from "../tips/Tips"

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentForm from "../comments/CommentForm";




function TipDetailPage() {
  const currentUser = useCurrentUser();
  const author_image = currentUser?.author_image;
  const [comments, setComments] = useState({ results: [] });

  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const [tip, setTip] = useState({ results: [] });
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: tip }, {data : comments}] = await Promise.all([
          axiosReq.get(`/tips/${id}`),
        ]);
        setTip({ results: [tip] });
        setComments({ results: [comments]})
        console.log(tip);
        console.log(tip.title)
        console.log(tip.category)
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData();

    // formData.append("title", title);
    // formData.append("ability", ability);
    // formData.append("category", category);
    // formData.append("screenshot", screenshotInput.current.files[0]);
    // formData.append("tip_content", tip_content);

    // try {
    //   const { data } = await axiosReq.post("/tips/", formData);
    //   setCurrentUser(data.user);
    //   history.push(`/tips/${data.id}`);
    // } catch (err) {
    //   console.log(err);
    //   if (err.response?.status !== 401) {
    //     setErrors(err.response?.data);
    //   }
    // }
  };
  return (
    <>
              <Tips {...tip.results[0]} setTips = {setTip} tipDetail/>
<Row>




        <Col md={{ span: 8, offset: 1 }} className={styles.TipContent}>
          <hr className={styles.HR} />
          <h3 className={styles.CommentHeader}>Add a Comment</h3>
          {currentUser ? (
  <CommentForm
  author_id={currentUser.author_id}
  authorImage={author_image}
  tip={id}
  setTip={setTip}
  setComments={setComments}
/>
) : comments.results.length ? (
  "Comments"
) : null}
          <Image
            src={AuthorImage}
            className={styles.AuthorComment}
            roundedCircle
          ></Image>

          <Form onSubmit={handleSubmit} className={styles.FormMargin}>
            <Form.Group className="mb-3" controlId="comment">
              <Form.Label className="d-none">Title</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Write a comment..."
                name="comment"
                // value={title}
                // onChange={handleChange}
              />
            </Form.Group>
            <div className={btnStyles.HeroButtonBox}>
              <Button
                className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`}
                type="submit"
              >
                Submit comment
              </Button>
            </div>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert variant="warning" key={idx} className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
          <hr className={styles.HR} />
          <h3 className={styles.CommentHeader}>Previous Comments</h3>
          <p>
            <Image
              src={AuthorImage}
              className={`${styles.PrevCommentImage} ${styles.AuthorComment}`}
              roundedCircle
            ></Image>
            Massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus viver.{" "}
            <span className={styles.CommentDate}>
              <em>Comment made xx days ago.</em>
            </span>
          </p>
          <hr className={styles.HrThin} />
          <p>
            <Image
              src={AuthorImage}
              className={`${styles.PrevCommentImage} ${styles.AuthorComment}`}
              roundedCircle
            ></Image>
            Massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus viver.{" "}
            <span className={styles.CommentDate}>
              <em>Comment made xx days ago.</em>
            </span>
          </p>
          <hr className={styles.HrThin} />
        </Col>

        <Col md={{ span: 3 }} className={styles.AuthorContent}>
          <h1>Author's Profile</h1>
          <Image
            src={AuthorImage}
            roundedCircle
            className={styles.Image}
          ></Image>
          <p className={styles.Name}>Name</p>
          <p className={styles.AuthorBody}>Member since: xxx</p>
          <p className={styles.AuthorBody}>Bio text</p>
          <p className={styles.AuthorBody}>Number of Tips</p>

          <Button className={btnStyles.GreenButtons}>Author's tips</Button>
        </Col>
      </Row>
    </>
  );
}

export default TipDetailPage;
