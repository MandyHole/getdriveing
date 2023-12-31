import React from "react";
import styles from "../styles/Buttons.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom/cjs/react-router-dom";

const MyButtons = ({
  text,
  additional_style,
  edit_btn,
  delete_btn,
  green,
  on_click,
  sign_in_btns,
  my_info_btns,
  grey,
  submit,
  add_btn,
}) => {
  return (
    <>
      {grey && (
        <>
          <Button
            className={`${styles.Buttons} ${additional_style}`}
            onClick={on_click}
          >
            {text}
          </Button>
        </>
      )}
      {add_btn && (
        <>
          {" "}
          <Link exact to="/tips/create" aria-label="Go to add a new tip page">
            <Button
              className={`${styles.SmallGrey} ${styles.ToolTip}`}
              onClick={on_click}
            >
              <i className="fa-solid fa-circle-plus"></i>
              <span className={styles.ToolTipText}>Add a New Tip</span>
            </Button>
          </Link>
        </>
      )}

      {edit_btn && (
        <>
          {" "}
          <Button
            className={`${styles.SmallGrey} ${styles.ToolTip}`}
            onClick={on_click}
            aria-label="Go to edit page"
          >
            <i className="fa-solid fa-pen-to-square"></i>
            <span className={styles.ToolTipText}>Edit</span>
          </Button>
        </>
      )}
      {delete_btn && (
        <>
          {" "}
          <Button
            className={`${styles.SmallGrey} ${styles.ToolTiplTiplTiplTip}`}
            onClick={on_click}
            aria-label="Delete button"
          >
            <i className="fa-solid fa-trash"></i>
            <span className={styles.ToolTipText}>Delete</span>
          </Button>
        </>
      )}
      {sign_in_btns && (
        <div md={{ span: 8, offset: 2 }} className={styles.CenterButtons}>
          <Link to="/sign-up">
            <Button
              size="lg"
              variant="dark"
              className={`${styles.HeroButtons} ${styles.Buttons}`}
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button
              size="lg"
              variant="dark"
              className={`${styles.HeroButtons} ${styles.Buttons}`}
            >
              Sign In
            </Button>
          </Link>
        </div>
      )}

      {my_info_btns && (
        <div md={{ span: 8, offset: 2 }} className={styles.CenterButtons}>
          <Link to="/my-info">
            <Button
              size="lg"
              variant="dark"
              className={`${styles.HeroButtons} ${styles.Buttons}`}
            >
              My Info
            </Button>
          </Link>
          <Link to="/tips/create">
            <Button
              size="lg"
              variant="dark"
              className={`${styles.HeroButtons} ${styles.Buttons}`}
            >
              Add a Tip
            </Button>
          </Link>
        </div>
      )}

      {green && (
        <Button className={`${styles.GreenButtons} ${styles.Block}`}>
          {text}
        </Button>
      )}

      {submit && (
        <Button
          className={`${styles.Buttons} ${additional_style}`}
          type="submit"
        >
          {text}
        </Button>
      )}
    </>
  );
};

export default MyButtons;
