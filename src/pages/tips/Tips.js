import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Tips.module.css";
import Figure from "react-bootstrap/Figure";
import StarRating from "../../components/StarRating";
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Buttons.module.css";
import HeroBoxComponent from "../../components/HeroBoxComponent";
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Tips = (props) => {
  const {
    id,
    ability,
    average_rating,
    category,
    created_on,
    is_owner,
    number_times_saved,
    owner,
    owner_id,
    saved_tips_id,
    screenshot,
    tip_content,
    title,
    updated_on,
    tipDetail,
    setTip,
  } = props;
  const currentUser = useCurrentUser();
  const ownsTip = currentUser?.username === owner;
  const history = useHistory()

  const handleSaveRequest = async () => {
    try {
        const { data } = await axiosRes.post('/saved_tips/', { tip:id });
        setTip((prevTips) => ({
            ...prevTips, 
            results: prevTips.results.map((tip) => {
                return tip.id === id ? 
                {...tip, number_times_saved: tip.number_times_saved + 1, saved_tips_id: data.id} 
                : tip;
            }),
        }));
        // window.location.reload(true);

    } catch (err){
        console.log(err)
    }
  }

  const handleUnsave = async () => {
    try {
      await axiosRes.delete(`/saved_tips/${saved_tips_id}`);
      setTip((prevTips) => ({
        ...prevTips,
        results: prevTips.results.map((tip) => {
          return tip.id === id
            ? { ...tip, number_times_saved: tip.number_times_saved - 1, saved_tips_id: null }
            : tip;
        }),
      }));
      // window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditTip = () => {
    history.push(`/tips/${id}/edit`)
  }

  const handleDeleteTip = async () => {
    try {
      await axiosRes.delete(`/tips/${id}/`)
      history.goBack();
  } catch (err) {
    console.log(err)
  }};


  return (
    <>
      {/* {tipDetail ? (
        <HeroBoxComponent
          h1={title}
          h2={`Category: ${category}, Ability: ${ability}`}
          h3={`Average Rating:  ${
            average_rating === null
              ? "No ratings yet"
              : `${average_rating}'/5 stars'`
          }`}
          h3_2={`Saved ${number_times_saved} Time${number_times_saved === 1 ? (""): ("s")}`}
        />
      ) : (
        <></>
      )} */}


          <Row>
            <Col lg={{ span: 4 }}>
              <Figure>
                <Figure.Image
                  className={styles.Screenshot}
                  alt={title}
                  src={screenshot}
                />
                <div className={styles.Rating}>
                  <Figure.Caption className={styles.ScreenshotCaption}>
                    <a href={screenshot} className={styles.Link} target="new">
                      See a larger screenshot
                    </a>
                  </Figure.Caption>
                </div>
              </Figure>

              { ownsTip && tipDetail && <><Button
                className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`} onClick={handleEditTip}
              >

                Edit this tip
              </Button>
              <Button
                className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`} onClick={handleDeleteTip}
              >

                Delete this tip
              </Button></>}

              { !ownsTip && currentUser && <><div className={styles.Rating}>
                <StarRating startingValue={average_rating} />
              </div>

              <Button className={`${btnStyles.Buttons} ${btnStyles.LeftFloat}`}>
                Rate this tip
              </Button></>}

{!ownsTip && currentUser && !saved_tips_id &&<><Button
                className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`}
                onClick={handleSaveRequest}
              >
                Save this tip
              </Button> </>}
              {!ownsTip && currentUser && saved_tips_id && <><Button
                className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`}
                onClick={handleUnsave}
              >
                Un-save this tip
              </Button> </>}
              
              
            </Col>
            <Col lg={{ span: 8 }}>
              {" "}
              <p className={styles.TipContent}>{tip_content}</p>
              <p className={styles.UpdatedDate}>
                Last updated on: {updated_on}
              </p>
            </Col>
          </Row>
</>
  );
};

export default Tips;
