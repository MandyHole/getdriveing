import React from "react";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import styles from "../styles/TipsFeed.module.css";
import Button from "react-bootstrap/Button";
import btnStyles from "../styles/Buttons.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Star from "./Star";

const TipOverview = (props) => {
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

  const currentUser = useCurrentUser();
  const ownsTip = currentUser?.username === owner;
  const history = useHistory();
  return (
    <div>
      <>
        <Card className={styles.Card}>
          <Card.Body>
            <Card.Title className={styles.CardTitle}>
              {is_owner ? (
                <>
                  <div className={btnStyles.RightButtons}>
                    <Link to={`/tips/${id}/edit`}>
                      <Button className={btnStyles.SmallGrey}>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Button>
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
              {category === "slides" && "Google Slide:"}

              {ability === "beginner" && " Beginner+"}
              {ability === "intermediate" && " Intermediate+"}
              {ability === "advanced" && " Advanced"}
              <div className={styles.StarLine}>
                Number of times saved: {number_times_saved}
              </div>
              <div className={styles.StarLine}>
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
              <Button className={`${btnStyles.Buttons} ${btnStyles.Width}`}>
                Read tip
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    </div>
  );
};

export default TipOverview;
