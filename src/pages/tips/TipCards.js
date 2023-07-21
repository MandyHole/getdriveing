import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Star from "../../components/Star";
import MyButtons from "../../components/MyButtons";
import styles from "../../styles/TipsFeedCards.module.css";

const TipCards = (props) => {
  // formats tips into cards: this gets displayed in the tip feeds
  const {
    id,
    title,
    is_owner,
    category,
    ability,
    number_times_saved,
    average_rating,
    tip_content,
  } = props;
  return (
    <>
      <article>
        <Card className={styles.Card}>
          <Card.Body>
            <Card.Title className={styles.CardTitle}>
              {is_owner ? (
                <>
                  <div className={styles.RightButtons}>
                    <Link to={`/tips/${id}/edit`}>
                      <MyButtons edit_btn />
                    </Link>
                  </div>
                </>
              ) : null}{" "}
              {title}{" "}
            </Card.Title>
            <Card.Subtitle className={`${styles.CardCategory} mb-2 text-muted`}>
              {category === "drive_pdf" && "Google Drive and PDFs:"}
              {category === "docs" && "Google Docs:"}
              {category === "sheets" && "Google Sheets:"}
              {category === "forms" && "Google Forms:"}
              {category === "slides" && "Google Slides:"}

              {ability === "beginner" && " Beginner"}
              {ability === "intermediate" && " Intermediate"}
              {ability === "advanced" && " Advanced"}
              <div className={styles.NewLine}>
                Number of times saved: {number_times_saved}
              </div>
              <div className={styles.NewLine}>
                {average_rating === null
                  ? `No ratings yet...`
                  : `Average Rating: `}

                {average_rating === null ? (
                  <Star overview_outline />
                ) : (
                  <Star overview_solid />
                )}

                {Math.floor(average_rating) >= 2 ? (
                  <Star overview_solid />
                ) : (
                  <Star overview_outline />
                )}

                {Math.floor(average_rating) >= 3 ? (
                  <Star overview_solid />
                ) : (
                  <Star overview_outline />
                )}

                {Math.floor(average_rating) >= 4 ? (
                  <Star overview_solid />
                ) : (
                  <Star overview_outline />
                )}

                {Math.floor(average_rating) === 5 ? (
                  <Star overview_solid />
                ) : (
                  <Star overview_outline />
                )}
              </div>
            </Card.Subtitle>
            <Card.Text>{`${tip_content.slice(0, 300)}...`}</Card.Text>
            <Link to={`/tips/${id}`}>
              <MyButtons grey text="Read tip" additional_style={styles.Width} />
            </Link>
          </Card.Body>
        </Card>{" "}
      </article>
    </>
  );
};

export default TipCards;
