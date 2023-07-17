import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Col from "react-bootstrap/Col";
import styles from "../../styles/TipDetailPage.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentForm from "../comments/CommentForm";
import PreviousComments from "../comments/PreviousComments";
import appStyles from "../../App.module.css";
import AuthorInfo from "../../components/AuthorInfo";
import btnStyles from "../../styles/Buttons.module.css";
import PageNotFound from "../../components/PageNotFound";
import MySpinner from "../../components/MySpinner";
import HeroComponent from "../../components/HeroComponent";
import Star from "../../components/Star";
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Figure from "react-bootstrap/Figure";
import DeleteModal from "../../components/DeleteModal";
import CreateRating from "../rating/CreateRatingForm";

function TipDetailPage() {
  const currentUser = useCurrentUser();
  const author_image = currentUser?.author_image;
  const [comments, setComments] = useState({ results: [] });
  const { id } = useParams();
  const [tips, setTips] = useState({ results: [] });
  const [authors, setAuthors] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();

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

  const handleSaveRequest = async () => {
    try {
      const { data } = await axiosRes.post("/saved_tips/", { tip: id });
      setTips((prevTips) => ({
        ...prevTips,
        results: prevTips.results.map((tip) => {
          return tip.id === id
            ? {
                ...tip,
                number_times_saved: tip.number_times_saved + 1,
                saved_tips_id: data.id,
              }
            : tip;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
    history.go(0);
  };

  const handleUnsave = async () => {
    try {
      await axiosRes.delete(`/saved_tips/${tips.results[0].saved_tips_id}`);
      setTips((prevTips) => ({
        ...prevTips,
        results: prevTips.results.map((tip) => {
          return tip.id === id
            ? {
                ...tip,
                number_times_saved: tip.number_times_saved - 1,
                saved_tips_id: null,
              }
            : tip;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
    history.go(0);
  };

  const handleEditTip = () => {
    history.push(`/tips/${id}/edit`);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteTip = async () => {
    try {
      await axiosRes.delete(`/tips/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {hasLoaded ? (
        <>
          {tips.results.length ? (
            <>
              <HeroComponent
                tipDetail
                h1={tips.results[0].title}
                h2={
                  <>
                    {tips.results[0].category === "drive_pdf" ? (
                      `Category: Drive and PDFs; Ability: ${tips.results[0].ability}`
                    ) : (
                      <>
                        {tips.results[0].category === "docs" ? (
                          `Category: Google Docs; Ability: ${tips.results[0].ability}`
                        ) : (
                          <>
                            {tips.results[0].category === "forms" ? (
                              `Category: Google Forms; Ability: ${tips.results[0].ability}`
                            ) : (
                              <>
                                {tips.results[0].category === "sheets" ? (
                                  `Category: Google Sheets; Ability: ${tips.results[0].ability}`
                                ) : (
                                  <>
                                    {tips.results[0].category === "slides" ? (
                                      `Category: Google Slides; Ability: ${tips.results[0].ability}`
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                }
                h3={
                  tips.results[0].average_rating === null
                    ? "No ratings yet..."
                    : "Average Rating: "
                }
                star1={
                  tips.results[0].average_rating === null ? (
                    <Star hero_outline />
                  ) : (
                    <Star hero_solid />
                  )
                }
                star2={
                  Math.floor(tips.results[0].average_rating) >= 2 ? (
                    <Star hero_solid />
                  ) : (
                    <Star hero_outline />
                  )
                }
                star3={
                  Math.floor(tips.results[0].average_rating) >= 3 ? (
                    <Star hero_solid />
                  ) : (
                    <Star hero_outline />
                  )
                }
                star4={
                  Math.floor(tips.results[0].average_rating) >= 4 ? (
                    <Star hero_solid />
                  ) : (
                    <Star hero_outline />
                  )
                }
                star5={
                  Math.floor(tips.results[0].average_rating) === 5 ? (
                    <Star hero_solid />
                  ) : (
                    <Star hero_outline />
                  )
                }
                h3_2={`Saved ${tips.results[0].number_times_saved} Time${
                  tips.results[0].number_times_saved === 1 ? "" : "s"
                }`}
              />

              <Row>
                <Col md={{ span: 8, offset: 1 }} className={styles.TipContent}>
                  {/* <Tips {...tips.results[0]} setTips={setTips} tipDetail /> */}
                  <>
                    <Row>
                      <Col lg={{ span: 4 }}>
                        <Figure>
                          <Figure.Image
                            alt={tips.results[0].title}
                            src={tips.results[0].screenshot}
                          />
                          <div className={`${appStyles.Center}`}>
                            <Figure.Caption>
                              <a
                                href={tips.results[0].screenshot}
                                className={styles.Link}
                                target="new"
                              >
                                See a larger screenshot
                              </a>
                            </Figure.Caption>
                          </div>
                        </Figure>

                        {tips.results[0].is_owner && (
                          <>
                            <Button
                              className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`}
                              onClick={handleEditTip}
                            >
                              Edit this tip
                            </Button>
                            <Button
                              className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`}
                              onClick={handleShow}
                            >
                              Delete this tip
                            </Button>
                          </>
                        )}

                        <DeleteModal
                          title="Warning"
                          text="Please note that this cannot be undone...are you sure you want to delete this tip? "
                          button_onclick={handleDeleteTip}
                          button_text="Delete Tip"
                          show={show}
                          handleClose={handleClose}
                        />

                        <div>
                          {!tips.results[0].is_owner && currentUser && (
                            <CreateRating tip={id} />
                          )}
                          .{" "}
                          {/* Add rating_tip_id to database and put below !rating_tips_id */}
                          {/* {!ownsTip && currentUser &&  <EditRating tip={id}/>}.{" "} */}
                        </div>

                        {!tips.results[0].is_owner &&
                          currentUser &&
                          !tips.results[0].saved_tips_id && (
                            <>
                              <Button
                                className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`}
                                onClick={handleSaveRequest}
                              >
                                Save this tip
                              </Button>{" "}
                            </>
                          )}
                        {!tips.results[0].is_owner &&
                          tips.results[0].saved_tips_id && (
                            <>
                              <Button
                                className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`}
                                onClick={handleUnsave}
                              >
                                Un-save this tip
                              </Button>{" "}
                            </>
                          )}
                      </Col>
                      <Col lg={{ span: 8 }}>
                        {" "}
                        <p className={styles.TipContent}>
                          {tips.results[0].tip_content}
                        </p>
                        <p className={styles.UpdatedDate}>
                          Last updated on: {tips.results[0].updated_on}
                        </p>
                      </Col>
                    </Row>
                  </>
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
