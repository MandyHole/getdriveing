import React from "react";
import styles from "../../styles/PreviousComments.module.css";
import ProfilePic from "../../components/ProfilePic";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal";
import { axiosRes } from "../../api/axiosDefaults";
import MyButtons from "../../components/MyButtons";
import EditCommentForm from "./EditCommentForm";

const PreviousComments = (props) => {
  // displays previous comments with comment author info
  // edit / delete appears to comment owner
  const { owner, content, updated_at, id, owner_image } = props;
  const currentUser = useCurrentUser();
  const owns_comment = currentUser?.username === owner;
  const history = useHistory();
  const [showEditForm, setShowEditForm] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteComment = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      history.go(0);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      <p>
        <ProfilePic src={owner_image} size="50px" author={owner} margin_right />
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
            {showEditForm ? (
              <EditCommentForm id={id} setShowEditForm={setShowEditForm} />
            ) : null}
            <em>I updated this comment {updated_at}</em>
          </p>
          <div className={styles.CenterButtons}>
            <MyButtons edit_btn on_click={() => setShowEditForm(true)} />
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
