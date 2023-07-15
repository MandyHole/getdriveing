import React from "react";
import HeroComponent from "../../components/HeroComponent";

const TipHeroes = (props) => {
  const {
    ability,
    average_rating,
    category,
    number_times_saved,
    title,
    tipDetail,
  } = props;


  return (
    <>
      {tipDetail ? (
        <HeroComponent
        tipDetail
          h1={title}
          h2={<>{category === "drive_pdf" ? (`Category: Drive and PDFs; Ability: ${ability}`) : (<>
            {category === "docs" ? (`Category: Google Docs; Ability: ${ability}`) : (<>
              {category === "forms" ? (`Category: Google Forms; Ability: ${ability}`): (<>
                {category === "sheets" ? (`Category: Google Sheets; Ability: ${ability}`): (<>
                  {category === "slides" ? (`Category: Google Slides; Ability: ${ability}`): (<>
              </>
            )}</>

          ) }</>)}</>)}</>)}</>}
        
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
          h3_2={`Saved ${number_times_saved} Time${number_times_saved === 1 ? (""): ("s")}`}
        />
      ) : (
        null
      )}
      </>
  );
};

export default TipHeroes;
