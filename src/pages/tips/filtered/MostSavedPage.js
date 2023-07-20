import React, { useEffect, useState } from "react";
import HeroComponent from "../../../components/HeroComponent";
import TipsFeed from "../../../pages/tips/TipsFeed";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import MyInfo from "../../../components/MyInfo";
import styles from "../../../styles/Homepage.module.css";
import { axiosReq } from "../../../api/axiosDefaults";
import MyButtons from "../../../components/MyButtons";

const MostSavedPage = () => {
  const currentUser = useCurrentUser();
  const [authors, setAuthors] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [ { data: authors }] = await Promise.all([
          axiosReq.get(`/authors`),
        ]);
        setAuthors(authors);
      } catch (err) {
        // console.log(err);
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
        <Col md={{ span: 8, offset: 1 }} className={styles.MainContent}>
          <TipsFeed filter={`ordering=-number_times_saved&`}/>
        </Col>

        {currentUser ? (
          <MyInfo
            {...authors.results[0]}
            setAuthors={setAuthors}
            filter={currentUser?.pk}
          />
        ) : null}

        {!currentUser && (
          <>
            <Col md={{ span: 3 }} className={styles.AuthorContent}>
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
                <MyButtons green text="Sign Up" />
              </Link>
              <Link to="/sign-in">
                <MyButtons green text="Sign In" />
              </Link>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default MostSavedPage;
