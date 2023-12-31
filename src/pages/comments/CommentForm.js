import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "../../styles/CommentForm.module.css";
import ProfilePic from "../../components/ProfilePic";
import { axiosRes } from "../../api/axiosDefaults";
import MyButtons from "../../components/MyButtons";
import Alert from "react-bootstrap/Alert";

function CommentForm(props) {
  // add a comment to a tip
  const { tip, setComments, authorImage } = props;
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        tip,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setContent("");
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <>
      <ProfilePic src={authorImage} size="50px" />

      <Form className={styles.FormMargin} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label className="d-none">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write a comment..."
            name="comment"
            className={styles.Input}
            value={content}
            onChange={handleChange}
          />
        </Form.Group>

        <div className={styles.Center}>
          <MyButtons submit text="Post your comment" />
        </div>
        {errors.content?.map((message, idx) => (
                          <Alert variant="warning" key={idx}>
                            {message}
                          </Alert>
                        ))}
      </Form>
    </>
  );
}

export default CommentForm;
