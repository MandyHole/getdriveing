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


const TipHeroes = (props) => {
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

  return (
    <>
      {tipDetail ? (
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
        null
      )}
      </>
  );
};

export default TipHeroes;
