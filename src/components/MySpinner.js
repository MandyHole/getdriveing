import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "../styles/Spinner.module.css";

const MySpinner = (full_page) => {
  // spinner for when content is loading
  return (
    <>
      {full_page && (
        <>
          <div className={`${styles.Spinner} ${styles.FullPage}`}>
            <Spinner animation="border" />
          </div>
        </>
      )}
      {!full_page && (
        <div className={`${styles.Spinner} p-4`}>
          <Spinner animation="border" />
        </div>
      )}
    </>
  );
};

export default MySpinner;
