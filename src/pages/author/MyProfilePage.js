import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import heroStyles from "../../styles/HeroComponent.module.css";
import HeroComponent from "../../components/HeroComponent";
import TipsFeed from "../tips/TipsFeed";
import MyInfo from "../../components/MyInfo";
import appStyles from "../../App.module.css";
import { useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import MyButtons from "../../components/MyButtons";

const MyProfilePage = () => {
  // shows current user's tips they created and info with edit profile button
  const currentUser = useCurrentUser();
  const [authors, setAuthors] = useState({ results: [] });

  useEffect(() => {
    const controller = new AbortController();
    const handleMount = async () => {
      try {
        const [{ data: authors }] = await Promise.all([
          axiosReq.get(`/authors`),
          { signal: controller.signal },
        ]);
        setAuthors(authors);
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
    return () => controller?.abort();
  });

  const loggedInContent = (
    <>
      <HeroComponent
        h1={`${currentUser?.username
          .charAt(0)
          .toUpperCase()}${currentUser?.username.slice(1)}'s Information`}
      />
      <Row className={appStyles.DetailRow}>
        <Col md={{ span: 8, offset: 1 }} className={appStyles.MainContent}>
          <h3 className={appStyles.ContentHeader}>
            Tips I Have Added <MyButtons add_btn />
          </h3>
          <div className={appStyles.Center}></div>
          {currentUser ? (
            <TipsFeed filter={`owner__author=${currentUser.pk}&`} />
          ) : null}
        </Col>
        {currentUser ? (
          <MyInfo
            {...authors.results[0]}
            setAuthors={setAuthors}
            filter={currentUser?.pk}
          />
        ) : null}
      </Row>
    </>
  );

  const loggedOutContent = (
    <>
      <HeroComponent
        h1="You need to sign in before you can see your information"
        additional_class={heroStyles.FullHeight}
        h2="Create a free account to create, save and rate content!"
        signinbuttons
      />
    </>
  );

  return <>{currentUser ? loggedInContent : loggedOutContent}</>;
};

export default MyProfilePage;
