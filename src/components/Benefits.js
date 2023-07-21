import React from "react";
import styles from "../styles/Benefits.module.css";
import MyButtons from "../components/MyButtons";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

const Benefits = () => {
  // Grey sidebar text with benefits for having an account
  return (
    <Col md={{ span: 3 }} className={styles.Background}>
      <h4 className={styles.Heading}>Benefits to having an account</h4>
      <div className={styles.Text}>
        You can:
        <ul>
          <li>Save useful tips so you can easily refer to them again</li>
          <li>Share your own tips to help others</li>
          <li>Rate tips to help others find the most useful information</li>
        </ul>
      </div>

      <Link to="/sign-up">
        <MyButtons green text="Sign Up" />
      </Link><br></br>
      <Link to="/sign-in">
        <MyButtons green text="Sign In" />
      </Link>
    </Col>
  );
};

export default Benefits;
