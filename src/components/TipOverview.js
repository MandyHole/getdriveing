import React from "react";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import styles from "../styles/TipsFeed.module.css";
import Button from "react-bootstrap/Button";
import btnStyles from "../styles/Buttons.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom/cjs/react-router-dom";

const TipOverview = (props) => {

    const {id,
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
        setTip,} = props

        const currentUser = useCurrentUser();
        const ownsTip = currentUser?.username === owner;
        const history = useHistory()
  return (
    <div><>
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
        <Card.Subtitle
          className={`${styles.CardCategory} mb-2 text-muted`}
        >
          {category === "drive_pdf" && "Google Drive and PDFs"}
          {category === "docs" && "Google Docs"}
          {category === "sheets" && "Google Sheets"}
          {category === "forms" && "Google Forms"}
          {category === "slides" && "Google Slides"}
        </Card.Subtitle>
        <Card.Text>{`${tip_content.slice(
          0,
          300
        )}...`}</Card.Text>
        <Link to={`/tips/${id}`}>
          <Button
            className={`${btnStyles.Buttons} ${btnStyles.Width}`}
          >
            Read tip
          </Button>
        </Link>
      </Card.Body>
    </Card>
  </></div>
  )
}

export default TipOverview