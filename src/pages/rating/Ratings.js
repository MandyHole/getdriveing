import { useCurrentUser, setCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Ratings.module.css";
import StarRating from "../../components/StarRating";
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Buttons.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState } from "react";

// import { useState } from "react";

const Ratings = (props) => {
const {
    id,
    tip,
    tip_rating,
    owner,
    average_rating
     } = props
const currentUser = useCurrentUser();
  const history = useHistory()
  const [errors, setErrors] = useState({});


  const handleRating = async (event) => {
    event.preventDefault();
    // const formData = new FormData();

    // formData.append("tip_rating", tip_rating);
    try {
      const { data } = await axiosReq.post("/rating/");
    //   setCurrentUser(data.user);
      history.go(0)    
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (<>
    <div className={styles.Rating}> <StarRating /></div>

    {/* <Button className={`${btnStyles.Buttons} ${btnStyles.LeftFloat}`} onClick={handleRating}>
      Rate this tip
    </Button> */}
    </>
  )
}

export default Ratings