import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "../styles/Tips.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../api/axiosDefaults";
import Tips from "../pages/tips/Tips";
import { Link } from "react-router-dom/cjs/react-router-dom";

const TipsFeed = ({ message, filter = "" }) => {
  const [tips, setTips] = useState({ results: "" });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const { data } = await axiosReq.get(`/tips/?${filter}/`);
        setTips(data);
        setHasLoaded(true);
        // console.log(data)
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchTips();
  }, [filter, pathname]);

  return (
    <>
      {hasLoaded ? (
        <>
          {tips.results.length
            ? tips.results.map((tip) => (
                <>
                  <Card className={styles.Card}>
                    <Card.Body>
                      <Card.Title> {tip.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {tip.category.toUpperCase()}
                      </Card.Subtitle>
                      <Card.Text>{`${tip.tip_content.slice(0, 300)}...`}</Card.Text>
                      {tip.is_owner ? (
                        <>
                        <Link to="/tips/{tip_id}" className={styles.Link}>
                            Read tip
                          </Link>
                          <Card.Link className={styles.Link} href="#">
                            Edit tip
                          </Card.Link>
                          <Card.Link className={styles.Link} href="#">
                            Delete tip
                          </Card.Link>
                        </>
                      ) : (
                        <>
                          <Card.Link className={styles.Link} href="#">
                            Save tip
                          </Card.Link>
                        </>
                      )}
                    </Card.Body>
                  </Card>
                </>
              ))
            
          : ("no results")}
          </>)
       : (
        console.log("loading")
      )}
    </>
  );
};

export default TipsFeed;
