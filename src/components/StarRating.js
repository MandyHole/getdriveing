import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useHistory } from "react-router-dom";
import {
  useCurrentUser
} from "../contexts/CurrentUserContext";
import { axiosReq } from "../api/axiosDefaults";
import Button from "react-bootstrap/Button";
import btnStyles from "../styles/Buttons.module.css";
import appStyles from "../App.module.css"


export default function StarRating(props) {
  const [value, setValue] = React.useState(0);
  const {
    tip,
     } = props

    //  const setCurrentUser = useSetCurrentUser();
     const currentUser = useCurrentUser();

  const history = useHistory()
  const [errors, setErrors] = useState({});


  // const handleUpdatedRating = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("tip_rating", value);
  //   formData.append("tip", tip);
  //   formData.append("owner", currentUser.username)
  //   try {
  //     await axiosReq.put(`/rating/${id}`, formData);
  //     history.go(0)    
  //   } catch (err) {
  //     console.log(err);
  //     if (err.response?.status !== 401) {
  //       setErrors(err.response?.data);
  //     }
  //   }
  // };
  const handleRating = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("tip_rating", value);
    formData.append("tip", tip);
    formData.append("owner", currentUser.username)
    try {
      await axiosReq.post("/rating/", formData);
      history.go(0)    
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };
  


  return (
   <> <Box className={appStyles.Center}
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
        <Button className={`${btnStyles.Buttons} ${btnStyles.LeftFloat}`} onClick={handleRating}>
        Rate this tip
      </Button>

{/* <Button className={`${btnStyles.Buttons} ${btnStyles.LeftFloat}`} onClick={handleUpdatedRating}>
Edit this tip
</Button> */}

</>

  );
}