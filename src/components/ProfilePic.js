import React from "react";
import styles from "../styles/ProfilePic.module.css";

const ProfilePic = ({ src, size, author, additional_class}) => {
  return (
    <span>
      <img
        className={`${styles.ProfilePic} ${additional_class}`}
        src={src}
        height={size}
        width={size}
        alt={`Profile Pic for ${author}`}
      />
    </span>
  );
};

export default ProfilePic;