import React, { useEffect, useState } from "react";
import HeroComponent from "../../../components/HeroComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import MyInfo from "../../../components/MyInfo";
import { axiosReq } from "../../../api/axiosDefaults";
import styles from "../../../styles/FilteredTips.module.css";
import MySpinner from "../../../components/MySpinner";
import Benefits from "../../../components/Benefits";
import TipsFeed from "../TipsFeed";

const GoogleSheets = () => {
  // shows tips about google sheets
  const currentUser = useCurrentUser();
  const [authors, setAuthors] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: authors }] = await Promise.all([
          axiosReq.get(`/tips/`),
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
      <HeroComponent h1={`Tips about Google Sheets`} />

      {hasLoaded ? (
        <>
          <Row>
            <Col md={{ span: 8, offset: 1 }} className={styles.MainContent}>
              <section>
                <TipsFeed filter={`category=sheets&`} />
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

export default GoogleSheets;
