import React, { useEffect, useState, memo } from "react";
import styles from "../../../styles/TipsFeedCards.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../../api/axiosDefaults";
import MySpinner from "../../../components/MySpinner";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import NoResultsFound from "../../../components/NoResultsFound";
import TipCards from "../TipCards";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../../utils/utils";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const FilteredCategoryTipsFeed = (props) => {
  const { filter = "", category_value = "" } = props;
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
      <div className={styles.FilterBtn}>
        <DropdownButton
          as={ButtonGroup}
          key="sort"
          id="sort_btn"
          title="Filter All Tips by Category or Ability"
          variant="secondary"
        >
          <Dropdown.Item eventKey="1" href="/docs">
            Google Docs
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" href="/slides">
            Google Slides
          </Dropdown.Item>
          <Dropdown.Item eventKey="3" href="/sheets">
            Google Sheets
          </Dropdown.Item>
          <Dropdown.Item eventKey="4" href="/forms">
            {" "}
            Google Forms
          </Dropdown.Item>
          <Dropdown.Item eventKey="5" href="/drive">
            Google Drive / PDFs
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="6" href="/beginner">
            Beginner
          </Dropdown.Item>
          <Dropdown.Item eventKey="7" href="/intermediate">
            Intermediate
          </Dropdown.Item>
          <Dropdown.Item eventKey="8" href="/advanced">
            Advanced
          </Dropdown.Item>
        </DropdownButton>
      </div>
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
                <>
                  {`${tip.category}` === category_value && (
                    <TipCards key={tip.id} {...tip} />
                  )}
                </>
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

export default memo(FilteredCategoryTipsFeed);
