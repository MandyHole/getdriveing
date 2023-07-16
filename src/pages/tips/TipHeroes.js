import React from "react";
import HeroComponent from "../../components/HeroComponent";
import Star from "../../components/Star";

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
          {average_rating === null ? <Star hero_outline /> : 
           <Star hero_solid />}

           star2=
          {Math.floor(average_rating) >= 2 ? <Star hero_solid /> : 
          <Star hero_outline /> }
           star3=
           {Math.floor(average_rating) >= 3 ? <Star hero_solid /> : 
           <Star hero_outline /> }

            star4=
            {Math.floor(average_rating) >= 4 ? <Star hero_solid />: 
            <Star hero_outline /> }

             star5=
             {Math.floor(average_rating) === 5 ? <Star hero_solid /> : 
             <Star hero_outline /> }
             
          h3_2={`Saved ${number_times_saved} Time${number_times_saved === 1 ? (""): ("s")}`}
        />
      ) : (
        null
      )}
      </>
  );
};

export default TipHeroes;
