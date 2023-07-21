import React from "react";
import styles from "../styles/ProfilePic.module.css";

const ProfilePic = ({ src, size, author, additional_class, margin_right }) => {
  // Author image to display in sidebars/by comments
  return (
    <>
      {margin_right && (
        <img
          className={`${styles.ProfilePic} ${styles.MarginRight}`}
          src={src}
          height={size}
          width={size}
          alt={`Profile Pic for ${author}`}
        />
      )}

      {!margin_right && (
        <img
          className={`${styles.ProfilePic} ${additional_class}`}
          src={src}
          height={size}
          width={size}
          alt={`Profile Pic for ${author}`}
        />
      )}
    </>
  );
};

export default ProfilePic;
