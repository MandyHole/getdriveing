import React from "react";
import styles from "../styles/ProfilePic.module.css";

const ProfilePic = ({ src, size, author}) => {
  return (
    <span>
      <img
        className={styles.ProfilePic}
        src={src}
        height={size}
        width={size}
        alt={`Profile Pic for ${author}`}
      />
    </span>
  );
};

export default ProfilePic;