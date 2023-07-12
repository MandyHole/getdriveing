import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "../styles/AuthorInfo.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../api/axiosDefaults";
import { Link } from "react-router-dom/cjs/react-router-dom";
import btnStyles from "../styles/Buttons.module.css";
import MySpinner from "./MySpinner";
import ProfilePic from "./ProfilePic";

const AuthorInfo = ({ filter }) => {
  const [authors, setAuthors] = useState({ results: "" });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { data } = await axiosReq.get(`/authors/${filter}`);
        setAuthors(data);
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
            {authors.name.length ? (
              <p className={styles.Name}>{authors.name}'s Profile</p>
            ) : (
              <p className={styles.Name}>{authors.owner}'s Profile</p>
            )}
            <p className={styles.AuthorBody}>
              Member since: {authors.created_on}
            </p>
            <p className={styles.AuthorBody}>{authors.bio}</p>
            <p className={styles.AuthorBody}>
              Tips created: {authors.number_tips_created}
            </p>

            {authors.is_owner ? (
              <>
                <Link exact to="/authors/${filter}/edit">
                  <Button className={btnStyles.GreenButtons}>
                    Edit profile
                  </Button>
                </Link>
              </>
            ) : (
              // Add this functionality
              <>
                <Link exact to="/tips_by_author/${filter}/">
                  <Button className={btnStyles.GreenButtons}>
                    Author's Tips
                  </Button>
                </Link>
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

export default AuthorInfo;
