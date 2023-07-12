import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Tips.module.css";
import Figure from "react-bootstrap/Figure";
import StarRating from "../../components/StarRating";
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Buttons.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { ratingClasses } from "@mui/material";
import appStyles from "../../App.module.css"



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
  // const { tip_id } = useParams();

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

    } catch (err){
        console.log(err)
    }
            history.go(0)
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
    } catch (err) {
      console.log(err);
    }
            history.go(0)
  };

  const handleEditTip = () => {
    history.push(`/tips/${id}/edit`)
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteTip = async () => {
    try {
      await axiosRes.delete(`/tips/${id}/`)
      history.goBack();
  } catch (err) {
    console.log(err)
  }};



  return (
    <>
              <Row>
            <Col lg={{ span: 4 }}>
              <Figure>
                <Figure.Image
                  className={styles.Screenshot}
                  alt={title}
                  src={screenshot}
                />
                <div className={`${styles.Rating} ${appStyles.Center}`}>
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
                className={`${btnStyles.Buttons} ${btnStyles.RightFloat}`} onClick={handleShow}
              >

                Delete this tip
              </Button></>}

              <DeleteModal 
              title="Warning" 
              text ="Please note that this cannot be undone...are you sure you want to delete this tip? " 
              button_onclick = {handleDeleteTip}
              button_text = "Delete Tip"
              show={show} 
              handleClose={handleClose} />

              <div className={styles.Centre}>

{!ownsTip && currentUser && <StarRating tip={id}/>}</div>

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
