import React, { useEffect, useState, memo } from "react";
import styles from "../../styles/TipsFeedCards.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import MySpinner from "../../components/MySpinner";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import NoResultsFound from "../../components/NoResultsFound";
import TipCards from "./TipCards";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import FilterArea from "../../components/FilterArea";

const TipsFeed = ({ filter = "" }) => {
  const [tips, setTips] = useState({ results: "" });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const { data } = await axiosReq.get(`/tips/?${filter}search=${query}`);
        setTips(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTips();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <div className={styles.MainContainer}>
      <FilterArea />
      
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
            <InfiniteScroll
              children={tips.results.map((tip) => (
                <TipCards key={tip.id} {...tip} />
              ))}
              dataLength={tips.results.length}
              loader={MySpinner}
              hasMore={!!tips.next}
              next={() => fetchMoreData(tips, setTips)}
            />
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

export default memo(TipsFeed);
