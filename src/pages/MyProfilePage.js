import React from "react";
import boxStyles from "../styles/HeroBox.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import styles from "../styles/Tips.module.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import AuthorImage from "../assets/blank-profile-picture-gb6ded336d_640.png";
import btnStyles from "../styles/Buttons.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import heroStyles from "../styles/HeroBox.module.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";

const MyProfilePage = () => {
  const currentUser = useCurrentUser();
  const [errors, setErrors] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData();

    // formData.append("title", title);
    // formData.append("ability", ability);
    // formData.append("category", category);
    // formData.append("screenshot", screenshotInput.current.files[0]);
    // formData.append("tip_content", tip_content);

    // try {
    //   const { data } = await axiosReq.post("/tips/", formData);
    //   setCurrentUser(data.user);
    //   history.push(`/tips/${data.id}`);
    // } catch (err) {
    //   console.log(err);
    //   if (err.response?.status !== 401) {
    //     setErrors(err.response?.data);
    //   }
    // }
  };

  const loggedInContent = (
    <>
      <div className={boxStyles.BoxBackground}>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h1>
                {currentUser?.username.charAt(0).toUpperCase()}
                {currentUser?.username.slice(1)}'s Information
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <Col md={{ span: 8, offset: 1 }} className={styles.TipContent}>
          <h3 className={styles.CommentHeader}>Saved Tips</h3>
<div className={styles.Center}>
          <Dropdown
            as={ButtonGroup}
            className={btnStyles.DropdownButton}
          >
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
          <Dropdown
            as={ButtonGroup}
            className={btnStyles.DropdownButton}
          >
            <Button className={btnStyles.DropdownText}>Filter the tips</Button>

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
          <InputGroup className={styles.Search} size="lg">
            <InputGroup.Text id="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Search all tips"
              aria-label="Search tips"
              aria-describedby="tip-search"
            />
          </InputGroup>

          <Card className={styles.Card}>
                        <Card.Body>
              <Card.Title> Tip title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Tip Category
              </Card.Subtitle>
              <Card.Text>
                odio facilisis mauris sit amet massa vitae tort odio facilisis
                mauris sit amet massa vitae tort odio facilisis mauris sit amet
                massa vitae tort
              </Card.Text>
              <Card.Link className={styles.Link} href="#">
                Get tip details
              </Card.Link>
              <Card.Link className={styles.Link} href="#">
                Unsave tip
              </Card.Link>
            </Card.Body>
          </Card>
<div className={styles.Margin}></div>
          <h3 className={styles.CommentHeader}>My Tips</h3>

          <div className={styles.Center}>
          <Dropdown
            as={ButtonGroup}
            className={btnStyles.DropdownButton}
          >
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
          <Dropdown
            as={ButtonGroup}
            className={btnStyles.DropdownButton}
          >
            <Button className={btnStyles.DropdownText}>Filter the tips</Button>

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
          <InputGroup className={styles.Search} size="lg">
            <InputGroup.Text id="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Search all tips"
              aria-label="Search tips"
              aria-describedby="tip-search"
            />
          </InputGroup>
          <Card className={styles.Card}>
            <Card.Body>
              <Card.Title> Tip title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Tip Category
              </Card.Subtitle>
              <Card.Text>
                odio facilisis mauris sit amet massa vitae tort odio facilisis
                mauris sit amet massa vitae tort odio facilisis mauris sit amet
                massa vitae tort
              </Card.Text>
              <Card.Link className={styles.Link} href="#">
                Edit tip
              </Card.Link>
              <Card.Link className={styles.Link} href="#">
                Delete tip
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{ span: 3 }} className={styles.AuthorContent}>
          <h1>My Profile</h1>
          <Image
            src={AuthorImage}
            roundedCircle
            className={styles.Image}
          ></Image>
          <p className={styles.Name}>Name</p>
          <p className={styles.AuthorBody}>Member since: xxx</p>
          <p className={styles.AuthorBody}>Bio text</p>
          <p className={styles.AuthorBody}>Number of Tips</p>

          <Button className={btnStyles.GreenButtons}>Edit profile</Button>
        </Col>
      </Row>
    </>
  );

  const loggedOutContent = (
    <>
      <div className={`${heroStyles.BoxBackground} ${heroStyles.FullHeight}`}>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h1>You need to sign in before you can see your information</h1>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <h2>Create a free account to create, save and rate content!</h2>
            </Col>
          </Row>
          <Row>
            <Col
              md={{ span: 8, offset: 2 }}
              className={btnStyles.HeroButtonBox}
            >
              <Link to="/sign-up">
                <Button
                  size="lg"
                  variant="dark"
                  className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
                >
                  Sign Up
                </Button>
              </Link>
              <Link to="/sign-in">
                <Button
                  size="lg"
                  variant="dark"
                  className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
                >
                  Sign In
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );

  return <>{currentUser ? loggedInContent : loggedInContent}</>;
};

export default MyProfilePage;
