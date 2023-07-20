import React, { useEffect, useState } from "react";
import HeroComponent from "../../../components/HeroComponent";
import TipsFeed from "../../../pages/tips/TipsFeed";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import MyInfo from "../../../components/MyInfo";
import styles from "../../../styles/Homepage.module.css";
import { axiosReq } from "../../../api/axiosDefaults";
import Benefits from "../../../components/Benefits";

const HighestRatedTips = () => {
  const currentUser = useCurrentUser();
  const [authors, setAuthors] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: authors }] = await Promise.all([
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
       <HeroComponent 
        h1={`Tips sorted by rating`} />

      <Row>
        <Col md={{ span: 8, offset: 1 }} className={styles.MainContent}>
          <TipsFeed filter={`ordering=-average_rating&`}/>
        </Col>

        {currentUser ? (
          <MyInfo
            {...authors.results[0]}
            setAuthors={setAuthors}
            filter={currentUser?.pk}
          />
        ) : null}

        {!currentUser && (
          <Benefits />
        )}
      </Row>
    </>
  );
};

export default HighestRatedTips;
