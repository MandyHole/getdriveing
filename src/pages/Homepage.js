import React, { useEffect, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import TipsFeed from "../pages/tips/TipsFeed";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import btnStyles from "../styles/Buttons.module.css";
import { Link } from "react-router-dom";
import MyInfo from "../components/MyInfo";
import appStyles from "../App.module.css";
import styles from "../styles/Homepage.module.css";
import authorStyles from "../styles/AuthorInfo.module.css";
import { axiosReq } from "../api/axiosDefaults";

const Homepage = () => {
  const currentUser = useCurrentUser();
  const [tips, setTips] = useState({ results: [] });
  const [authors, setAuthors] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: tips }, { data: authors }] = await Promise.all([
          axiosReq.get(`/tips/`),
          axiosReq.get(`/authors`),
        ]);
        setTips({ results: [tips] });
        setAuthors(authors);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  });

  return (
    <>
      {currentUser && (
        <HeroComponent
          h1="Make the most of Google Drive Workplace"
          h2={`Welcome, ${currentUser?.username
            .charAt(0)
            .toUpperCase()}${currentUser?.username.slice(1)}`}
          homepage_logged_in
        />
      )}

      {!currentUser && (
        <HeroComponent
          signinbuttons
          h1="Make the most of Google Drive Workplace"
          h2="See below for some useful tips. Or, create a free account so you can share your own tips as well as save and rate existing ones!"
        />
      )}

      <Row>
        <Col md={{ span: 8, offset: 1 }} className={appStyles.MainContent}>
          <TipsFeed />
        </Col>

        {currentUser ? (
          <MyInfo
            {...tips.results[0]}
            setTips={setTips}
            {...authors.results[0]}
            setAuthors={setAuthors}
            filter={currentUser?.pk}
          />
        ) : null}

        {!currentUser && (
          <>
            <Col md={{ span: 3 }} className={authorStyles.AuthorContent}>
              <h4 className={styles.Heading}>Benefits to having an account</h4>
              <div className={styles.Text}>
                You can:
                <ul>
                  <li>
                    Save useful tips so you can easily refer to them again
                  </li>
                  <li>Share your own tips to help others</li>
                  <li>
                    Rate tips to help others find the most useful information
                  </li>
                </ul>
              </div>

              <Link to="/sign-up">
                <Button
                  className={`${btnStyles.GreenButtons} ${btnStyles.Block}`}
                >
                  Sign Up
                </Button>
              </Link>
              <Link to="/sign-in">
                <Button
                  className={`${btnStyles.GreenButtons} ${btnStyles.Block}`}
                >
                  Sign In
                </Button>
              </Link>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default Homepage;
