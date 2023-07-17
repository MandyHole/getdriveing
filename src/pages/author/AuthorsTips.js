import React, { useEffect } from "react";
import TipsFeed from '../tips/TipsFeed';
import HeroComponent from '../../components/HeroComponent';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import MyInfo from "../../components/MyInfo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import appStyles from '../../App.module.css';
import MySpinner from "../../components/MySpinner";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";



const AuthorsTips = () => {
    const { id } = useParams()
    const [author, setAuthor] = useState({ results: [] });
    const [tips, setTips] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    // const currentUser = useCurrentUser();



    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: tips }, {data : author}] = await Promise.all([
              axiosReq.get(`/tips/`),
              axiosReq.get(`/authors/${id}`)
            ]);
            setAuthor({ results: [author] });
            setTips(tips)
            setHasLoaded(true)
    
          } catch (err) {
            console.log(err);
          }
        };
        setHasLoaded(false)
        handleMount();
      }, [id]);



  return (<>
   

{hasLoaded? (<>{author.results.length ?
(<HeroComponent {...author.results[0]} h1={`Tips by ${author.results[0].owner}`} />) : (null)}
 <Row>
        <Col md={{ span: 8, offset: 1 }} className={appStyles.MainContent}>
<TipsFeed filter={`owner__author=${id}&`}/>
</Col>

        {author.results.length ? (
        <MyInfo
        {...author.results[0]} setAuthors = {setAuthor}
        {...tips} setTips = {setTips}
        filter={id}  author_tip_page/>) : (<></>)}

</Row></>) : (<MySpinner full_page/>) } 
        
</>
  )
}

export default AuthorsTips