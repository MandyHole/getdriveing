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
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const MyInfo = (props) => {
  const { filter, tips, setTips} = props;
  const [authors, setAuthors] = useState({ results: "" });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const { id } = useParams();

  
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const [{ data: tips }, { data : authors}] = await Promise.all([
          axiosReq.get(`/tips/`),
          axiosReq.get(`/authors/${filter}`)
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
                <Link to={`/authors/${filter}/edit`}>
                  <Button className={btnStyles.GreenButtons}>
                    Edit profile
                  </Button>
                </Link>
              </>
            ) : (
              // Add this functionality
              <>
                <Link to={`/tips_by_author/${filter}`}>
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

export default MyInfo;
