// import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";
// import { useHistory } from "react-router-dom";
// import { useCurrentUser } from "../contexts/CurrentUserContext";
// import { axiosReq } from "../api/axiosDefaults";
// import Button from "react-bootstrap/Button";
// import btnStyles from "../styles/Buttons.module.css";
// import appStyles from "../App.module.css";
// import Alert from "react-bootstrap/Alert";
// import { useParams } from "react-router-dom/cjs/react-router-dom";


// export default function EditRating(props) {
//   const { tips } = props;
//   const [value, setValue] = React.useState(0);
//   const [rating, setRating] = useState({
//         tip_rating: "",
//         tip: "",
//         owner: "",
//       });

//   console.log(rating)

//   const currentUser = useCurrentUser();
//   const history = useHistory();
//   const [errors, setErrors] = useState({});
//   const [hasLoaded, setHasLoaded] = useState(false);
//   const {id} = useParams()



//   // need to set rating_id in database
//   useEffect(() => {
//     const handleMount = async () => {
//       try {

//         const [{ data: tips }, { data: rating }] = await Promise.all([
//           axiosReq.get(`/tips/${id}`),
//           axiosReq.get(`/rating/${tips.rating_id}`),
//         ]);
//           const { tip_rating, tip, owner } = rating;
//         setRating({ results: [rating] });
//         tips.is_owner
//           ? setRating({
//             tip_rating, tip, owner
//             })
//           : history.go(0);
//         setHasLoaded(true);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     setHasLoaded(false);
//     handleMount();
//   }, [history, tips.rating_id]);

//   const handleChange = (event) => {
//     setRating({
//       ...rating,
//       [event.target.name]: event.target.value,
//     });
//   };

//   // const handleUpdatedRating = async (event) => {
//   //   event.preventDefault();
//   //   const formData = new FormData();
//   //   formData.append("tip_rating", value);
//   //   formData.append("tip", tip);
//   //   formData.append("owner", currentUser.username)
//   //   try {
//   //     await axiosReq.put(`/rating/${id}`, formData);
//   //     history.go(0)
//   //   } catch (err) {
//   //     console.log(err);
//   //     if (err.response?.status !== 401) {
//   //       setErrors(err.response?.data);
//   //     }
//   //   }
//   // };
//   const handleRating = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("tip_rating", value);
//     formData.append("tip", tip);
//     formData.append("owner", currentUser.username);
//     try {
//       await axiosReq.post("/rating/", formData);
//       history.go(0);
//     } catch (err) {
//       console.log(err);
//       if (err.response?.status !== 401) {
//         setErrors(err.response?.data);
//       }
//     }
//   };

//   return (
//     <>
//     {hasLoaded? (<>{new_rating && <><Box
//         className={appStyles.Center}
//         sx={{
//           "& > legend": { mt: 2 },
//         }}
//       >
//         <Rating
//           name="simple-controlled"
//           value={value}
//           size="large"
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         />
//       </Box>
//       <Button
//         className={`${btnStyles.Buttons} ${btnStyles.LeftFloat}`}
// onClick={handleRating}      >
//         Rate this tip
//       </Button>
//       {errors.title?.map((message, idx) => (
//                 <Alert variant="warning" key={idx}>
//                   {message}
//                 </Alert>
//               ))}</>}
//       </>): null }
      

//       {hasLoaded? (<> {edited_rating && 
//      <> <Box
//       className={appStyles.Center}
//       sx={{
//         "& > legend": { mt: 2 },
//       }}
//     >
//       <Rating
//         name="simple-controlled"
//         value={rating.tip_rating}
//         size="large"
//         onChange={(event, newValue) => {
//           setValue(newValue);
//           handleChange();
//         }}
//       />
//     </Box>
//     <Button
//       className={`${btnStyles.Buttons} ${btnStyles.LeftFloat}`}
// onClick={handleRating}      >
//      Edit your rating
//     </Button>
//     {errors.title?.map((message, idx) => (
//               <Alert variant="warning" key={idx}>
//                 {message}
//               </Alert>
//             ))}</>
      
      
      
      
//       }</>) : null}
     
      
      
      
//       <Box
//         className={appStyles.Center}
//         sx={{
//           "& > legend": { mt: 2 },
//         }}
//       >
//         <Rating
//           name="simple-controlled"
//           value={value}
//           size="large"
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         />
//       </Box>
//       <Button
//         className={`${btnStyles.Buttons} ${btnStyles.LeftFloat}`}
// onClick={handleRating}      >
//         Rate this tip
//       </Button>
//       {errors.title?.map((message, idx) => (
//                 <Alert variant="warning" key={idx}>
//                   {message}
//                 </Alert>
//               ))}

//       {/* <Button className={`${btnStyles.Buttons} ${btnStyles.LeftFloat}`} onClick={handleUpdatedRating}>
// Edit this tip
// </Button> */}
//     </>
//   );
// }



// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";
// import { useHistory } from "react-router-dom";
// import { useCurrentUser } from "../contexts/CurrentUserContext";
// import { axiosReq } from "../api/axiosDefaults";
// import Button from "react-bootstrap/Button";
// import btnStyles from "../styles/Buttons.module.css";
// import appStyles from "../App.module.css";

// export default function StarRating(props) {
//   const [value, setValue] = React.useState(0);
//   const { tip } = props;

//   //  const setCurrentUser = useSetCurrentUser();
//   const currentUser = useCurrentUser();

//   const history = useHistory();
//   const [errors, setErrors] = useState({});

//   // const handleUpdatedRating = async (event) => {
//   //   event.preventDefault();
//   //   const formData = new FormData();
//   //   formData.append("tip_rating", value);
//   //   formData.append("tip", tip);
//   //   formData.append("owner", currentUser.username)
//   //   try {
//   //     await axiosReq.put(`/rating/${id}`, formData);
//   //     history.go(0)
//   //   } catch (err) {
//   //     console.log(err);
//   //     if (err.response?.status !== 401) {
//   //       setErrors(err.response?.data);
//   //     }
//   //   }
//   // };
//   const handleRating = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("tip_rating", value);
//     formData.append("tip", tip);
//     formData.append("owner", currentUser.username);
//     try {
//       await axiosReq.post("/rating/", formData);
//       history.go(0);
//     } catch (err) {
//       console.log(err);
//       if (err.response?.status !== 401) {
//         setErrors(err.response?.data);
//       }
//     }
//   };

//   return (
//     <>
//       {" "}
//       <Box
//         className={appStyles.Center}
//         sx={{
//           "& > legend": { mt: 2 },
//         }}
//       >
//         <Rating
//           name="simple-controlled"
//           value={value}
//           size="large"
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         />
//       </Box>
//       <Button
//         className={`${btnStyles.Buttons} ${btnStyles.LeftFloat}`}
//         onClick={handleRating}
//       >
//         Rate this tip
//       </Button>
//       {errors.title?.map((message, idx) => (
//                 <Alert variant="warning" key={idx}>
//                   {message}
//                 </Alert>
//               ))}
//       {/* <Button className={`${btnStyles.Buttons} ${btnStyles.LeftFloat}`} onClick={handleUpdatedRating}>
// Edit this tip
// </Button> */}
//     </>
//   );
// }
