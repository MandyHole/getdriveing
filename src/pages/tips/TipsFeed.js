import React, { useEffect, useState } from "react";
import styles from "../../styles/TipsFeedCards.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import MySpinner from "../../components/MySpinner";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import NoResultsFound from "../../components/NoResultsFound";
import TipCards from "./TipCards";

const TipsFeed = ({ filter = "" }) => {
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
    <div className={styles.MainContainer}>
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
            placeholder="Search tips"
            aria-label="Search tips"
            aria-describedby="tip-search"
          />
        </InputGroup>
      </Form>
      {hasLoaded ? (
        <>
          {tips.results.length ? (
            tips.results.map((tip) => (
                         <TipCards key={tip.id} {...tip}/>
            ))
          ) : (
            <NoResultsFound />
          )}
        </>
      ) : (
        <MySpinner />
      )}
    </div>
  );
};

export default TipsFeed;
