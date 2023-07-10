import React from "react";
import HeroComponent from "../../components/HeroComponent";
import styles from "../../styles/Tips.module.css"

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

  const starOutline = 
  <i className={`fa-regular fa-star ${styles.Star}`} />


  return (
    <>
      {tipDetail ? (
        <HeroComponent
          h1={title}
          h2={`Category: ${category}, Ability: ${ability}`}
          h3={average_rating === null ? ("No ratings yet...") : ("Average Rating: ")}
          
          star1=
          {average_rating === null ? ('fa-regular fa-star') : 
           ("fa-solid fa-star")}

           star2=
          {Math.floor(average_rating) >= 2 ? ('fa-solid fa-star') : 
           ("fa-regular fa-star")}
           star3=
           {Math.floor(average_rating) >= 3 ? ('fa-solid fa-star') : 
            ("fa-regular fa-star")}

            star4=
            {Math.floor(average_rating) >= 4 ? ('fa-solid fa-star') : 
             ("fa-regular fa-star")}

             star5=
             {Math.floor(average_rating) === 5 ? ('fa-solid fa-star') : 
              ("fa-regular fa-star")}

            
          //     // ('<i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>')
          //     : Math.floor(average_rating) === 1 ? (star1="fa-regular fa-star")
          //     : Math.floor(average_rating) === 2 ? ("2 stars")
          //     : Math.floor(average_rating) === 3 ? ("3 stars")
          //     : Math.floor(average_rating) === 4 ? (`${starOutline}`)          
          //     : average_rating === 5 ? ("5 stars")
          //     : null
          // }`}
          h3_2={`Saved ${number_times_saved} Time${number_times_saved === 1 ? (""): ("s")}`}
        />
      ) : (
        null
      )}
      </>
  );
};

export default TipHeroes;
