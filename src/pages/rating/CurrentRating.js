import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/CreateEditRatingForms.module.css";
import MySpinner from "../../components/MySpinner";

export default function CurrentRating({ id }) {
  // displays the owner's current rating for a particular tip
  const [rating, setRating] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const history = useHistory();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/rating/${id}`);
        const { tip_rating } = data;
        setRating(tip_rating);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    handleMount();
  }, [history, id, currentUser]);

  return (
    <>
      {" "}
      {hasLoaded ? (
        <Box
          className={styles.Center}
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Rating name="read-only" value={rating} size="large" readOnly />
        </Box>
      ) : (
        <MySpinner />
      )}
    </>
  );
}
