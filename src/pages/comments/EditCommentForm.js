import React, { useState, useEffect } from "react";
import styles from "../../styles/CommentForm.module.css";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import PageNotFound from "../PageNotFound";
import MySpinner from "../../components/MySpinner";
import MyButtons from "../../components/MyButtons";

const EditCommentForm = ({ id, setShowEditForm }) => {
  // edit existing comment (must own comment)
  const history = useHistory();
  const [comments, setComments] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/comments/${id}`);
        const { content, is_owner } = data;
        setComments({ results: [data] });
        is_owner ? setCreateCommentData({ content }) : history.goBack();
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    handleMount();
  }, [history, id]);
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
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
    history.go(0);
  };

  return (
    <div>
      {hasLoaded ? (
        <>
          {comments.results.length ? (
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
              <div className={styles.Center}>
                <MyButtons text="Save Changes" submit />{" "}
                <MyButtons
                  grey
                  text="Cancel"
                  on_click={() => setShowEditForm(false)}
                />
              </div>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert variant="warning" key={idx} className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
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

export default EditCommentForm;
