import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/CreateEditRatingForms.module.css"
import MySpinner from "../../components/MySpinner";


export default function EditRating( {id} ) {


  // const [value, setValue] = useState(0);
  const [rating, setRating] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const history = useHistory();
  const [hasLoaded, setHasLoaded] = useState(false);
  //   const [owner, setOwner] = useState({ results: [] });


  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/rating/${id}`);
        const { tip_rating, is_owner } = data;
        setRating(tip_rating);
        // setOwner(is_owner)
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    handleMount();
  }, [history, id, currentUser]);

  return (
    <>      {hasLoaded? (<Box className={styles.Center}
      sx={{
        "& > legend": { mt: 2 },
      }}
    >

      <Rating name="read-only" value={rating} size="large" readOnly />
    </Box>):  (
        <MySpinner  />
      )} 
      </>)}