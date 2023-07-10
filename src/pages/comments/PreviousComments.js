import React from 'react'
import styles from "../../styles/Comments.module.css";
import ProfilePic from '../../components/ProfilePic';
import AuthorImage from "../../assets/blank-profile-picture-gb6ded336d_640.png";
import profileStyles from "../../styles/ProfilePic.module.css"

const PreviousComments = (props) => {
    const {owner, content, updated_at} = props
  return (
    <>
    <p>
            <ProfilePic 
              src={AuthorImage}
              size="50px"
              author={owner}
              additional_class={profileStyles.MarginRight}
            />
            {content}</p>
            <p className={styles.CommentDate}>
                
              <em>Comment made by {owner}: {updated_at}</em>
            </p>
          
          <hr className={styles.HrThin} /> </>
  )
}

export default PreviousComments