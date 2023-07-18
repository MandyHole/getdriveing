import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/TipDetailPage.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentForm from "../comments/CommentForm";
import PreviousComments from "../comments/PreviousComments";
import AuthorInfo from "../../components/AuthorInfo";
import PageNotFound from "../PageNotFound";
import MySpinner from "../../components/MySpinner";
import HeroComponent from "../../components/HeroComponent";
import Star from "../../components/Star";
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Figure from "react-bootstrap/Figure";
import DeleteModal from "../../components/DeleteModal";
import CreateRating from "../rating/CreateRatingForm";
import MyButtons from "../../components/MyButtons";
import EditRatingForm from "../rating/EditRatingForm";
import CurrentRating from "../rating/CurrentRating";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";


function TipDetailPage() {
  const currentUser = useCurrentUser();
  const author_image = currentUser?.author_image;
  const [comments, setComments] = useState({ results: [] });
  const { id } = useParams();
  const [tips, setTips] = useState({ results: [] });
  const [authors, setAuthors] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
  const [showEditForm, setShowEditForm] = useState(false);

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
        // setRatings(ratings);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
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
      // console.log(err);
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
      // console.log(err);
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
      // console.log(err);
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
                  <>
                    <Row>
                      <Col lg={{ span: 4 }}>
                        <aside>
                          <Figure className={styles.ImageArea}>
                            <Figure.Image
                              className={styles.Image}
                              alt={tips.results[0].title}
                              src={tips.results[0].screenshot}
                            />
                            <div className={styles.ImageCaption}>
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
                          {!tips.results[0].is_owner &&
                            currentUser &&
                            !tips.results[0].saved_tips_id && (
                              <>
                                <MyButtons
                                  text="Save this tip"
                                  grey
                                  on_click={handleSaveRequest}
                                  additional_style={styles.FullWidth}
                                />
                              </>
                            )}
                          {!tips.results[0].is_owner &&
                            tips.results[0].saved_tips_id && (
                              <>
                                <MyButtons
                                  text="Un-save this tip"
                                  grey
                                  on_click={handleUnsave}
                                  additional_style={styles.FullWidth}
                                />
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
                          {!tips.results[0].is_owner && currentUser && (
                            <>
                              <p className={styles.RatingText}>
                                My Current Rating
                                <MyButtons
                                  edit_btn
                                  on_click={() => setShowEditForm(true)}
                                />
                              </p>
                              <CurrentRating id="19" />
                            </>
                          )}
                          {!tips.results[0].is_owner && currentUser && (
                            <>
                              <p className={styles.RatingText}>Rate this Tip</p>
                              <CreateRating tip={id} />
                            </>
                          )}
                          .{" "}
                          {showEditForm ? (
                            <>
                              <p className={styles.RatingText}>
                                Your Updated Rating
                              </p>{" "}
                              <EditRatingForm
                                id="19"
                                setShowEditForm={setShowEditForm}
                              />
                            </>
                          ) : null}
                          {/* Add rating_tip_id to database and put below !rating_tips_id */}
                          {/* {!ownsTip && currentUser &&  <EditRating tip={id}/>}.{" "} */}
                        </aside>
                      </Col>
                      <Col lg={{ span: 8 }}>
                        <section>
                          {tips.results[0].is_owner && (
                            <>
                              <div className={styles.RightButtons}>
                                <MyButtons edit_btn on_click={handleEditTip} />
                                <MyButtons delete_btn on_click={handleShow} />
                              </div>
                            </>
                          )}{" "}
                          <p className={styles.TipContent}>
                            {tips.results[0].tip_content}
                          </p>
                          <p className={styles.UpdatedDate}>
                            Last updated on: {tips.results[0].updated_on}
                          </p>
                        </section>
                      </Col>
                    </Row>
                  </>
                  <section>
                    {currentUser ? (
                      <>
                        <hr className={styles.HR} />
                        <h3 className={styles.ContentHeader}>Add a Comment</h3>
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
                        <h3 className={styles.ContentHeader}>
                          Want to add a comment? Please create an account or
                          sign in...
                        </h3>
                        <div md={{ span: 8, offset: 2 }}>
                          <MyButtons sign_in_btns />
                        </div>
                      </>
                    )}
                  </section>
                  <hr className={styles.HR} />{" "}
                  <section>
                    <h3 className={styles.ContentHeader}>Previous Comments</h3>
                    <p className={styles.Center}>
                      {comments.results.length
                        ? null
                        : currentUser
                        ? "Make the first comment using the form above"
                        : "No comments have been made yet"}
                    </p>
                    {comments.results.length
                      ? (<InfiniteScroll 
                        children={comments.results.map((comment) => (
                          <PreviousComments key={comment.id} {...comment} />
                        ))}
                        dataLength={comments.results.length}
                        loader={MySpinner}
                        hasMore={!!comments.next}
                        next={() => fetchMoreData(comments, setComments)} />)

                      : null}{" "}
                  </section>
                </Col>
                <AuthorInfo
                  {...tips.results[0]}
                  setTips={setTips}
                  {...authors.results[0]}
                  setAuthors={setAuthors}
                  filter={tips.results[0].owner_id}
                  key={authors.results[0].id}
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
