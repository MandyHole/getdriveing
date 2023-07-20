import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import styles from "../styles/MyInfo.module.css";
import { axiosReq } from "../api/axiosDefaults";
import { Link } from "react-router-dom/cjs/react-router-dom";
import MySpinner from "./MySpinner";
import ProfilePic from "./ProfilePic";
import MyButtons from "./MyButtons";

const MyInfo = (props) => {
  const { filter, author_tip_page } = props;
  const [authors, setAuthors] = useState({ results: "" });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const [{ data: authors }] = await Promise.all([
          axiosReq.get(`/authors/${filter}`),
        ]);
        setAuthors(authors);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    fetchAuthors();
  }, [filter]);

  return (
    <>
      <Col md={{ span: 3 }} className={styles.AuthorContent}>
        <aside>
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
              <p className={styles.AuthorBody}> {authors.bio}</p>
              <p className={styles.AuthorBody}>
                Tips created: {authors.number_tips_created}
              </p>

              {authors.is_owner ? (
                <>
                  <Link to={`/authors/${filter}/edit`}>
                    <MyButtons green text="Edit profile" />
                  </Link>
                </>
              ) : (
                <>
                  {!author_tip_page && (
                    <Link to={`/authors/${filter}`}>
                      <MyButtons green text="Author's Tips" />
                    </Link>
                  )}
                </>
              )}
            </>
          ) : (
            <MySpinner />
          )}
        </aside>
      </Col>
    </>
  );
};

export default MyInfo;
