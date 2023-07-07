import React from "react";
import boxStyles from "../styles/HeroBox.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import styles from "../styles/Tips.module.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert"
import AuthorImage from "../assets/blank-profile-picture-gb6ded336d_640.png";
import btnStyles from "../styles/Buttons.module.css";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import Figure from 'react-bootstrap/Figure';


const TipDetailPage = () => {
  const [errors, setErrors] = useState({});
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
      <div className={boxStyles.BoxBackground}>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h1>Title of Tip</h1>
              <h2>Category of Tip, Ability Level</h2>
              <h3>Average Rating: XX/5 stars, Saved XXX Times</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <Col md={{ span: 8, offset: 1 }} className={styles.TipContent}>
<Row><Col lg={{ span: 4 }}>
        <Figure>
      <Figure.Image className={styles.Screenshot}
        alt="171x180"
        src={AuthorImage}
      />
       <div className={styles.Rating}>
      <Figure.Caption className={styles.ScreenshotCaption}>
       <Link to="/" className={styles.Link}> See a larger screenshot</Link>
      </Figure.Caption></div>
    </Figure>
    <div className={styles.Rating}>    <StarRating  /></div>

          <Button className={`${btnStyles.Buttons} ${btnStyles.LeftFloat}`}>
            Rate this tip
          </Button>

          <Button className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`}>
            Save this tip
          </Button>
          
    </Col>
<Col lg={{ span: 8 }}>  <p className={styles.tipDetails}>
            Tip odio facilisis mauris sit amet massa vitae tortor condimentum
            lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in
            iaculis nunc sed augue lacus viver: excerpt of tip... Tip odio
            facilisis mauris sit amet massa vitae tortor condimentum lacinia
            quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis
            nunc sed augue lacus viver: excerpt of tip... Tip odio facilisis
            mauris sit amet massa vitae tortor condimentum lacinia quis vel eros
            donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue
            lacus viver: excerpt of tip... Tip odio facilisis mauris sit amet
            massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus viver:
            excerpt of tip...            Tip odio facilisis mauris sit amet massa vitae tortor condimentum
            lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in
            iaculis nunc sed augue lacus viver: excerpt of tip... Tip odio
            facilisis mauris sit amet massa vitae tortor condimentum lacinia
            quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis
            nunc sed augue lacus viver: excerpt of tip... Tip odio facilisis
            mauris sit amet massa vitae tortor condimentum lacinia quis vel eros
            donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue
            lacus viver: excerpt of tip... Tip odio facilisis mauris sit amet
            massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus viver:
            excerpt of tip...
          </p></Col>  


          </Row>
          

          <hr className={styles.HR} />
          <h3 className={styles.CommentHeader}>Add a Comment</h3>
          <Image src={AuthorImage} className={styles.AuthorComment} roundedCircle></Image>

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
            <p><Image src={AuthorImage} className={`${styles.PrevCommentImage} ${styles.AuthorComment}`} roundedCircle></Image>
            Massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus viver. <span className={styles.CommentDate}><em>Comment made xx days ago.</em></span>
            </p><hr className={styles.HrThin} />
            <p><Image src={AuthorImage} className={`${styles.PrevCommentImage} ${styles.AuthorComment}`} roundedCircle></Image>
            Massa vitae tortor condimentum lacinia quis vel eros donec ac odio
            tempor orci dapibus ultrices in iaculis nunc sed augue lacus viver. <span className={styles.CommentDate}><em>Comment made xx days ago.</em></span>
            </p><hr className={styles.HrThin} />


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
};

export default TipDetailPage;
