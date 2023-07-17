import React, { useEffect, useState } from "react";
import styles from "../../styles/TipsFeed.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import MySpinner from "../../components/MySpinner";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import NoResultsFound from "../../components/NoResultsFound";
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Buttons.module.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Star from "../../components/Star";


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
                <Card.Subtitle className={`${styles.CardCategory} mb-2 text-muted`}>
                  {tip.category === "drive_pdf" && "Google Drive and PDFs:"}
                  {tip.category === "docs" && "Google Docs:"}
                  {tip.category === "sheets" && "Google Sheets:"}
                  {tip.category === "forms" && "Google Forms:"}
                  {tip.category === "slides" && "Google Slide:"}
    
                  {tip.ability === "beginner" && " Beginner+"}
                  {tip.ability === "intermediate" && " Intermediate+"}
                  {tip.ability === "advanced" && " Advanced"}
                  <div className={styles.NewLine}>
                    Number of times saved: {tip.number_times_saved}
                  </div>
                  <div className={styles.NewLine}>
                    {tip.average_rating === null
                      ? `No ratings yet...`
                      : `Average Rating: `}
    
                    {tip.average_rating === null ? (
                      <Star overview_outline />
                    ) : (
                      <Star overview_solid />
                    )}
    
                    {Math.floor(tip.average_rating) >= 2 ? (
                      <Star overview_solid />
                    ) : (
                      <Star overview_outline />
                    )}
    
                    {Math.floor(tip.average_rating) >= 3 ? (
                      <Star overview_solid />
                    ) : (
                      <Star overview_outline />
                    )}
    
                    {Math.floor(tip.average_rating) >= 4 ? (
                      <Star overview_solid />
                    ) : (
                      <Star overview_outline />
                    )}
    
                    {Math.floor(tip.average_rating) === 5 ? (
                      <Star overview_solid />
                    ) : (
                      <Star overview_outline />
                    )}
                  </div>
                </Card.Subtitle>
                <Card.Text>{`${tip.tip_content.slice(0, 300)}...`}</Card.Text>
                <Link to={`/tips/${tip.id}`}>
                  <Button className={`${btnStyles.Buttons} ${btnStyles.Width}`}>
                    Read tip
                  </Button>
                </Link>
              </Card.Body>
            </Card>              
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
