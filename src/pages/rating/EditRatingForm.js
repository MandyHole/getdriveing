import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Alert from "react-bootstrap/Alert";
import MyButtons from "../../components/MyButtons";
import styles from "../../styles/CreateEditRatingForms.module.css"


export default function EditRating( {id} ) {
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState({ results: [] });
//   const [owner, setOwner] = useState({ results: [] });
  const [tip, setTip] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
//   const { id } = useParams();

  // need to set rating_id in database
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/rating/${id}`);
        // Change below to is_owner
        const { tip_rating, tip, is_owner } = data;
        setRating(tip_rating);
        setTip(tip)
        // setOwner(is_owner)
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    handleMount();
    
  }, [history, id, currentUser, value]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("tip_rating", value);
    formData.append("tip", tip);
    formData.append("owner", currentUser.username);
    try {
      await axiosReq.put(`/rating/${id}`, formData);

    } catch (err) {
    //   console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
    history.go(0);
  };


  return (
    <>
      {hasLoaded ? 
    //   (is_owner?
      (
        <>
          <Box className={styles.Center}
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              size="large"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <MyButtons
            text="Edit your rating"
            grey
            on_click={handleSubmit}
            additional_style={styles.FullWidth}
          />

          {errors.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

        </>
        // ):(null)
      ) : null}
  </>
  );
}
