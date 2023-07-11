import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import formStyles from "../../styles/Form.module.css";
import ProfilePic from "../../components/ProfilePic";
import { axiosRes } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Buttons.module.css"

function CommentForm(props) {
  const { tip, setTip, setComments, authorImage, author_id } = props;
  const [content, setContent] = useState("");

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
    //   setTip((prevTip) => ({
    //     results: [
    //       {
    //         ...prevTip.results[0],
    //       },
    //     ],
    //   }));
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
<>
    <ProfilePic
    src={authorImage}
    size="50px" />

    <Form className={formStyles.FormMargin} onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="comment">
    <Form.Label className="d-none">Title</Form.Label>
    <Form.Control
      type="text"
      placeholder="Write a comment..."
      name="comment"
      className={formStyles.Input}
            value={content}
            onChange={handleChange}
          />
      </Form.Group>

      <div  className={btnStyles.CenterButtons}>
      <button
        className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`}
        disabled={!content.trim()}
        type="submit"
      >
        Post your comment
      </button></div>
    </Form></>
  );
}

export default CommentForm;