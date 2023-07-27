import React, { useEffect, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import TipsFeed from "../pages/tips/TipsFeed";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import MyInfo from "../components/MyInfo";
import styles from "../styles/Homepage.module.css";
import { axiosReq } from "../api/axiosDefaults";
import Benefits from "../components/Benefits";

const Homepage = () => {
  const currentUser = useCurrentUser();
  const [authors, setAuthors] = useState({ results: [] });

  useEffect(() => {
    const controller = new AbortController();
    const handleMount = async () => {
      try {
        const [{ data: authors }] = await Promise.all([
          axiosReq.get(`/authors`),
          { signal: controller.signal },
        ]);
        setAuthors(authors);
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
    return () => controller?.abort();
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

      <Row className={styles.DetailRow}>
        <Col md={{ span: 8, offset: 1 }} className={styles.MainContent}>
          {/* shows tips by when added (newest first) */}
          <TipsFeed />
        </Col>

        {currentUser ? (
          // shows info on user if logged in
          <MyInfo
            {...authors.results[0]}
            setAuthors={setAuthors}
            filter={currentUser?.pk}
          />
        ) : null}
        {/* shows benefits of having an account if not signed in */}
        {!currentUser && <Benefits />}
      </Row>
    </>
  );
};

export default Homepage;
