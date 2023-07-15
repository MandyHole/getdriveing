import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "../styles/AuthorInfo.module.css";
import { axiosReq } from "../api/axiosDefaults";
import { Link } from "react-router-dom/cjs/react-router-dom";
import btnStyles from "../styles/Buttons.module.css";
import MySpinner from "./MySpinner";
import ProfilePic from "./ProfilePic";

const MyInfo = (props) => {
  const { filter, author_tip_page } = props;
  const [authors, setAuthors] = useState({ results: "" });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const [{ data: authors }] = await Promise.all([
          // axiosReq.get(`/tips/`),
          axiosReq.get(`/authors/${filter}`),
        ]);
        // setTips({ results: [tips] });
        setAuthors(authors);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchAuthors();
  }, [filter]);

  return (
    <>
      <Col md={{ span: 3 }} className={styles.AuthorContent}>
        {hasLoaded ? (
          <>
            <ProfilePic src={authors.image} size="150px" />

            <p className={styles.Name}>
              {authors.is_owner ? "My Profile:" : null}{" "}
              {authors.name.length ? `${authors.name}` : `${authors.owner}`}
            </p>
           

            <p className={styles.AuthorBody}>
              Member since: {authors.created_on}
            </p>
            <p className={styles.AuthorBody}>
              {" "}
              {authors.bio}
              
            </p>
            <p className={styles.AuthorBody}>
              Tips created: {authors.number_tips_created}
            </p>

            {authors.is_owner ? (
              <>
                <Link to={`/authors/${filter}/edit`}>
                  <Button className={btnStyles.GreenButtons}>
                    Edit profile
                  </Button>
                </Link>
              </>
            ) : (
              <>
                {!author_tip_page && (
                  <Link to={`/authors/${filter}`}>
                    <Button className={btnStyles.GreenButtons}>
                      Author's Tips
                    </Button>
                  </Link>
                )}
              </>
            )}
          </>
        ) : (
          <MySpinner />
        )}
      </Col>{" "}
    </>
  );
};

export default MyInfo;
