import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import styles from "../styles/AuthorInfo.module.css";
import { axiosReq } from "../api/axiosDefaults";
import { Link } from "react-router-dom/cjs/react-router-dom";
import MySpinner from "./MySpinner";
import ProfilePic from "./ProfilePic";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MyButtons from "./MyButtons";

const AuthorInfo = (props) => {
  const { filter, setTips } = props;
  const [authors, setAuthors] = useState({ results: "" });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const [{ data: tips }, { data: authors }] = await Promise.all([
          axiosReq.get(`/tips/${id}`),
          axiosReq.get(`/authors/${filter}`),
        ]);
        setTips({ results: [tips] });
        setAuthors(authors);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchAuthors();
  }, [filter, setTips, id]);

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
                <Link to={`/authors/${filter}/edit`}>
                  <MyButtons green text="Edit profile" />
                </Link>
              </>
            ) : (
              <>
                <Link to={`/authors/${filter}`}>
                  <MyButtons green text="Author's Tips" />
                </Link>
              </>
            )}
          </>
        ) : (
          <MySpinner full_page />
        )}
      </Col>{" "}
    </>
  );
};

export default AuthorInfo;
