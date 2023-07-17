import React, { useEffect, useState } from "react";
import HeroComponent from '../../components/HeroComponent'
import TipsFeed from './TipsFeed'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import MyInfo from '../../components/MyInfo';
import appStyles from '../../App.module.css'
import { axiosReq } from "../../api/axiosDefaults";
import boxStyles from "../../styles/HeroComponent.module.css";
import MySpinner from "../../components/MySpinner";


const SavedTips = () => {
  const currentUser = useCurrentUser();
  const [tips, setTips] = useState({ results: [] });
  const [authors, setAuthors] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: tips }, {data : authors}] = await Promise.all([
          axiosReq.get(`/tips/`),
          axiosReq.get(`/authors`)
        ]);
        setTips({ results: [tips] });
        setAuthors(authors)
        setHasLoaded(true)

      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false)
    handleMount();
  }, []);

  return (
    
    <>

    {!currentUser && <HeroComponent signinbuttons
        h1="Make the most of Google Drive Workplace"
        h2="You need to sign in or sign up in order to access saved tips"
        additional_class={boxStyles.FullHeight}
        />}


        {currentUser && <><HeroComponent 
        h1={`${currentUser?.username.charAt(0).toUpperCase()}${currentUser?.username.slice(1)}'s Saved Tips`}
        h2={`Below are any tips that you have saved...`}

        /> </> } 
          {hasLoaded ? (<><Row>
        <Col md={{ span: 8, offset: 1 }} className={appStyles.MainContent}>
        {currentUser ? (
          <TipsFeed filter={`author_saved_tip=4__owner__author=4&`}/>) : (null)}
        </Col>


        {currentUser && <>    <MyInfo  
        {...tips.results[0]} setTips = {setTips}
        {...authors.results[0]} setAuthors = {setAuthors}
        filter={currentUser?.pk} /></>}
    


</Row></>) : (<MySpinner/>)}


    </>
  )
}

export default SavedTips