import React, { useEffect, useState } from "react";
import HeroComponent from '../../components/HeroComponent'
import TipsFeed from '../../components/TipsFeed'
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import btnStyles from "../../styles/Buttons.module.css";
import { Link } from "react-router-dom";
import MyInfo from '../../components/MyInfo';
import appStyles from '../../App.module.css'
import styles from '../../styles/Homepage.module.css'
import authorStyles from "../../styles/AuthorInfo.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import boxStyles from "../../styles/HeroComponent.module.css";


const SavedTips = () => {
  const currentUser = useCurrentUser();
  const filter_user = currentUser?.username|| ""
  const [tips, setTips] = useState({ results: [] });
  const [authors, setAuthors] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: tips }, {data : authors}] = await Promise.all([
          axiosReq.get(`/tips/`),
          axiosReq.get(`/authors`)
        ]);
        setTips({ results: [tips] });
        setAuthors(authors)

      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, );

  return (
    
    <>
        {currentUser && <HeroComponent 
        h1={`${currentUser?.username.charAt(0).toUpperCase()}${currentUser?.username.slice(1)}'s Saved Tips`}
        h2={`Below are any tips that you have saved...`}

        />}
      
      
        {!currentUser && <HeroComponent signinbuttons
        h1="Make the most of Google Drive Workplace"
        h2="You need to sign in or sign up in order to access saved tips"
        additional_class={boxStyles.FullHeight}
        />}
      
      
      
        <Row>
        <Col md={{ span: 8, offset: 1 }} className={appStyles.MainContent}>
        {/* <TipsFeed filter={`saved_tips_id__owner=${filter_user}__tip&`}/> */}
        {/* <TipsFeed filter={`owner=${filter_user}__saved_tip__tip&`} message="It looks like you don't have any saved tips yet..."/> */}
        {/* <TipsFeed filter={`saved_tips_id__owner==${filter_user}__tip&`} message="It looks like you don't have any saved tips yet..."/> */}
        {/* <TipsFeed filter={`saved_tips__owner__authors__owner==${currentUser}&`} message="It looks like you don't have any saved tips yet..."/> */}

        <TipsFeed filter={`saved_tips__owner==${filter_user}&`} message="It looks like you don't have any saved tips yet..."/>

        </Col>


        {currentUser ? (
        <MyInfo  
        {...tips.results[0]} setTips = {setTips}
        {...authors.results[0]} setAuthors = {setAuthors}
        filter={currentUser?.pk} />):(null)}

  {!currentUser && <>
    <Col md={{ span: 3 }} className={authorStyles.AuthorContent}>
  <h4 className={styles.Heading}>Benefits to having an account</h4>
  <div className={styles.Text}>You can:
  <ul>
    <li>Save useful tips so you can easily refer to them again</li>
    <li>Share your own tips to help others</li>
    <li>Rate tips to help others find the most useful information</li>
  </ul></div>

  <Link to="/sign-up">
  <Button
    className={`${btnStyles.GreenButtons} ${btnStyles.Block}`}
  >
    Sign Up
  </Button></Link>
  <Link to="/sign-in">
  <Button
    className={`${btnStyles.GreenButtons} ${btnStyles.Block}`}
  >
    Sign In
  </Button></Link></Col></>
  }
  


{/* </Col> */}
</Row>
    </>
  )
}

export default SavedTips