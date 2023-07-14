import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Tips.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Tips from "../tips/Tips";
import TipHeroes from "./TipHeroes";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentForm from "../comments/CommentForm";
import PreviousComments from "../comments/PreviousComments";
import appStyles from "../../App.module.css";
import AuthorInfo from "../../components/AuthorInfo";
import btnStyles from "../../styles/Buttons.module.css";
import PageNotFound from "../../components/PageNotFound";
import MySpinner from "../../components/MySpinner";

function TipDetailPage() {
  const currentUser = useCurrentUser();
  const author_image = currentUser?.author_image;
  const [comments, setComments] = useState({ results: [] });
  const { id } = useParams();
  const [tips, setTips] = useState({ results: [] });
  const [authors, setAuthors] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: tips }, { data: comments }, { data: authors }] =
          await Promise.all([
            axiosReq.get(`/tips/${id}`),
            axiosReq.get(`/comments/?tip=${id}`),
            axiosReq.get(`/authors`),
          ]);
        setTips({ results: [tips] });
        setComments(comments);
        setAuthors(authors);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    handleMount();
  }, [id]);

  return (
    <>
      {hasLoaded ? (
        <>
          {tips.results.length ? (
            <>
              <TipHeroes {...tips.results[0]} setTips={setTips} tipDetail />

              <Row>
                <Col md={{ span: 8, offset: 1 }} className={styles.TipContent}>
                  <Tips {...tips.results[0]} setTips={setTips} tipDetail />
                  {currentUser ? (
                    <>
                      <hr className={styles.HR} />
                      <h3 className={appStyles.ContentHeader}>Add a Comment</h3>
                      <CommentForm
                        author_id={currentUser.author_id}
                        authorImage={author_image}
                        tip={id}
                        setTips={setTips}
                        setComments={setComments}
                      />
                    </>
                  ) : (
                    <>
                      <h3 className={appStyles.ContentHeader}>
                        Want to add a comment? Please create an account or sign
                        in...
                      </h3>
                      <div
                        md={{ span: 8, offset: 2 }}
                        className={btnStyles.CenterButtons}
                      >
                        <Link to="/sign-up">
                          <Button
                            size="lg"
                            variant="dark"
                            className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
                          >
                            Sign Up
                          </Button>
                        </Link>
                        <Link to="/sign-in">
                          <Button
                            size="lg"
                            variant="dark"
                            className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
                          >
                            Sign In
                          </Button>
                        </Link>
                      </div>
                    </>
                  )}
                  <hr className={styles.HR} />{" "}
                  <h3 className={appStyles.ContentHeader}>Previous Comments</h3>
                  <p className={appStyles.Center}>
                    {comments.results.length
                      ? null
                      : currentUser
                      ? "Make the first comment using the form above"
                      : "No comments have been made yet"}
                  </p>
                  {comments.results.length
                    ? comments.results.map((comment) => (
                        <PreviousComments key={comment.id} {...comment} />
                      ))
                    : null}{" "}
                </Col>
                <AuthorInfo
                  {...tips.results[0]}
                  setTips={setTips}
                  {...authors.results[0]}
                  setAuthors={setAuthors}
                  filter={tips.results[0].owner_id}
                />{" "}
              </Row>
            </>
          ) : (
            <div>
              <PageNotFound />
            </div>
          )}
        </>
      ) : (
        <MySpinner full_page />
      )}
    </>
  );
}

export default TipDetailPage;
