import React, { useEffect, useState } from "react";
import HeroComponent from "../../../components/HeroComponent";
import TipsFeed from "../TipsFeed";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import MyInfo from "../../../components/MyInfo";
import { axiosReq } from "../../../api/axiosDefaults";
import styles from "../../../styles/FilteredTips.module.css";
import MySpinner from "../../../components/MySpinner";
import Benefits from "../../../components/Benefits";

const Intermediate = () => {
  // shows tips at Intermediate ability
  const currentUser = useCurrentUser();
  const [authors, setAuthors] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: authors }] = await Promise.all([
          axiosReq.get(`/authors`),
        ]);
        setAuthors(authors);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    handleMount();
  }, []);

  return (
    <>
      <HeroComponent h1={`Tips at an Intermediate Level`} />

      {hasLoaded ? (
        <>
          <Row className={styles.DetailRow}>
            <Col md={{ span: 8, offset: 1 }} className={styles.MainContent}>
              <section>
                <TipsFeed filter={`ability=intermediate&`} />
              </section>
            </Col>

            {currentUser && (
              <>
                {" "}
                <MyInfo
                  {...authors.results[0]}
                  setAuthors={setAuthors}
                  filter={currentUser?.pk}
                />
              </>
            )}

            {!currentUser && <Benefits />}
          </Row>
        </>
      ) : (
        <MySpinner />
      )}
    </>
  );
};

export default Intermediate;
