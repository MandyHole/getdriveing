import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/CreateEditRatingForms.module.css";
import Alert from "react-bootstrap/Alert";
import MyButtons from "../../components/MyButtons";

export default function StarRating(props) {
  const [value, setValue] = React.useState(0);
  const { tip } = props;
  const currentUser = useCurrentUser();

  const history = useHistory();
  const [errors, setErrors] = useState({});

  const handleRating = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("tip_rating", value);
    formData.append("tip", tip);
    formData.append("owner", currentUser.username);
    try {
      await axiosReq.post("/rating/", formData);
      history.go(0);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <>
      {" "}
      <Box
        className={styles.Center}
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
        text="Rate this tip"
        grey
        on_click={handleRating}
        additional_style={styles.FullWidth}
      />
      {errors.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    </>
  );
}
