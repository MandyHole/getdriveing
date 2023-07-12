import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Buttons.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import heroStyles from "../../styles/HeroComponent.module.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import HeroComponent from "../../components/HeroComponent";
import TipsFeed from "../../components/TipsFeed";
import AuthorInfo from "../../components/AuthorInfo";
import appStyles from "../../App.module.css"

const MyProfilePage = () => {
  const currentUser = useCurrentUser();

  const loggedInContent = (
    <>
      <HeroComponent
        h1={`${currentUser?.username
          .charAt(0)
          .toUpperCase()}${currentUser?.username.slice(1)}'s Information`}
      />
      <Row>
        <Col md={{ span: 8, offset: 1 }} className={appStyles.MainContent}>
          <h3 className={appStyles.ContentHeader}>My Tips</h3>
          <div className={appStyles.Center}>
            <Dropdown as={ButtonGroup} className={btnStyles.DropdownButton}>
              <Button className={btnStyles.DropdownText}>Sort the tips</Button>

              <Dropdown.Toggle
                className={btnStyles.DropdownArrow}
                id="dropdown-split-basic"
              />

              <Dropdown.Menu className={btnStyles.DropdownMenu}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} className={btnStyles.DropdownButton}>
              <Button className={btnStyles.DropdownText}>
                Filter the tips
              </Button>

              <Dropdown.Toggle
                className={btnStyles.DropdownArrow}
                id="dropdown-split-basic"
              />

              <Dropdown.Menu className={btnStyles.DropdownMenu}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <TipsFeed />
        </Col>
        <AuthorInfo filter={4} />
      </Row>
    </>
  );

  const loggedOutContent = (
    <>
      <HeroComponent
        h1="You need to sign in before you can see your information"
        additional_class={heroStyles.FullHeight}
        h2="Create a free account to create, save and rate content!"
        link1="/sign-up"
        signinbuttons
        
      />
    </>
  );

  return <>{currentUser ? loggedInContent : loggedOutContent}</>;
};

export default MyProfilePage;
