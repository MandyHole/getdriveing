import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Spinner.module.css";

const MySpinner = () => {
  return (
    <div className={`${styles.Spinner} p-4`}>
      <Spinner animation="border" />
    </div>
  );
};

export default MySpinner;