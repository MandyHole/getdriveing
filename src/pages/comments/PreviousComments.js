import React from "react";
import styles from "../../styles/Comments.module.css";
import ProfilePic from "../../components/ProfilePic";
import AuthorImage from "../../assets/blank-profile-picture-gb6ded336d_640.png";
import profileStyles from "../../styles/ProfilePic.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal";
import { axiosRes } from "../../api/axiosDefaults";
import MyButtons from "../../components/MyButtons";

const PreviousComments = (props) => {
  const { owner, content, updated_at, id } = props;
  const currentUser = useCurrentUser();
  const owns_comment = currentUser?.username === owner;
  const history = useHistory();
  const handleEditComment = () => {
    history.push(`/comments/${id}/edit`);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteComment = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      history.go(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <p>
        <ProfilePic
          src={AuthorImage}
          size="50px"
          author={owner}
          additional_class={profileStyles.MarginRight}
        />
        {content}
      </p>
      {!owns_comment && (
        <p className={styles.CommentDate}>
          <em>
            Comment made by {owner}: {updated_at}
          </em>
        </p>
      )}
      {owns_comment && (
        <>
          <p className={styles.CommentDate}>
            <em>I updated this comment {updated_at}</em>
          </p>
          <div className={styles.CenterButtons}>
            <MyButtons edit_btn on_click={handleEditComment} />
            <MyButtons delete_btn on_click={handleShow} />
          </div>
        </>
      )}
      <DeleteModal
        title="Warning"
        text="Please note that this cannot be undone...are you sure you want to delete this comment? "
        button_onclick={handleDeleteComment}
        button_text="Delete Comment"
        show={show}
        handleClose={handleClose}
      />
      <hr className={styles.HrThin} />{" "}
    </>
  );
};

export default PreviousComments;
