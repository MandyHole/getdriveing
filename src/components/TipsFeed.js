import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../styles/TipsFeed.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../api/axiosDefaults";
import { Link } from "react-router-dom/cjs/react-router-dom";
import btnStyles from "../styles/Buttons.module.css";
import MySpinner from "./MySpinner";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import NoResultsFound from "./NoResultsFound";

const TipsFeed = ({ message, filter = "" }) => {
  const [tips, setTips] = useState({ results: "" });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const { data } = await axiosReq.get(`/tips/?${filter}search=${query}`);
        setTips(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTips();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <>
      {" "}
      <Form onSubmit={(event) => event.preventDefault()}>
        <InputGroup size="lg">
          <InputGroup.Text className={styles.Search} id="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </InputGroup.Text>
          <Form.Control
            className={styles.Search}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search all tips"
            aria-label="Search tips"
            aria-describedby="tip-search"
          />
        </InputGroup>
      </Form>
      {hasLoaded ? (
        <>
          {tips.results.length ? (
            tips.results.map((tip) => (
              <>
                <Card className={styles.Card}>
                  <Card.Body>
                    <Card.Title className={styles.CardTitle}>
                      {tip.is_owner ? (
                        <>
                          <div className={btnStyles.RightButtons}>
                            <Link to={`/tips/${tip.id}/edit`}>
                              <Button className={btnStyles.SmallGrey}>
                                <i className="fa-solid fa-pen-to-square"></i>
                              </Button>
                            </Link>
                          </div>
                        </>
                      ) : null}{" "}
                      {tip.title}{" "}
                    </Card.Title>
                    <Card.Subtitle
                      className={`${styles.CardCategory} mb-2 text-muted`}
                    >
                      {tip.category === "drive_pdf" && "Google Drive and PDFs"}
                      {tip.category === "docs" && "Google Docs"}
                      {tip.category === "sheets" && "Google Sheets"}
                      {tip.category === "forms" && "Google Forms"}
                      {tip.category === "slides" && "Google Slides"}
                    </Card.Subtitle>
                    <Card.Text>{`${tip.tip_content.slice(
                      0,
                      300
                    )}...`}</Card.Text>
                    <Link to={`/tips/${tip.id}`}>
                      <Button
                        className={`${btnStyles.Buttons} ${btnStyles.Width}`}
                      >
                        Read tip
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </>
            ))
          ) : (
            <NoResultsFound />
          )}
        </>
      ) : (
        <MySpinner />
      )}
    </>
  );
};

export default TipsFeed;
