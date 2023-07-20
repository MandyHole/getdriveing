import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from "../styles/FilterArea.module.css";

const FilterArea = () => {
  return (
    <>
      <div className={styles.FilterBtnBox}>
        <div className={styles.FilterBtn}>
          <DropdownButton
            as={ButtonGroup}
            key="sort"
            id="sort_btn"
            title="Filter All Tips by Category or Ability"
            variant="dark"
          >
            <Dropdown.Item
              eventKey="1"
              href="/docs"
              aria-label="Google Docs Tips Page"
            >
              Google Docs
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              href="/slides"
              aria-label="Google Slides Tips Page"
            >
              Google Slides
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              href="/sheets"
              aria-label="Google Sheets Tips Page"
            >
              Google Sheets
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="4"
              href="/forms"
              aria-label="Google Forms Tips Page"
            >
              {" "}
              Google Forms
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="5"
              href="/drive"
              aria-label="Google Drive/PDFs Tips Page"
            >
              Google Drive / PDFs
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              eventKey="6"
              href="/beginner"
              aria-label="Beginner Tips"
            >
              Beginners
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="7"
              href="/intermediate"
              aria-label="Intermediate Tips"
            >
              Intermediate
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="8"
              href="/advanced"
              aria-label="Advanced Tip"
            >
              Advanced
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className={styles.FilterBtn}>
          <DropdownButton
            as={ButtonGroup}
            key="sort"
            id="sort_btn"
            title="Sort All Tips"
            variant="dark"
          >
            <Dropdown.Item
              eventKey="1"
              href="/"
              aria-label="Homepage: Tips sorted by date added"
            >
              By date added
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              href="/most_saved"
              aria-label="Tips sorted by number of saves"
            >
              By number of saves
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              href="/highest"
              aria-label="Tips sorted by rating"
            >
              By rating
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </>
  );
};

export default FilterArea;
