import React, { useEffect, useState } from "react";
import HeroComponent from '../../../components/HeroComponent';
import FilteredTipsFeed from './FilteredCategoryTipsFeed';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCurrentUser } from '../../../contexts/CurrentUserContext';
import MyInfo from '../../../components/MyInfo';
import { axiosReq } from "../../../api/axiosDefaults";
import styles from "../../../styles/FilteredTips.module.css";
import MySpinner from "../../../components/MySpinner";
import { Link } from "react-router-dom/cjs/react-router-dom";
import MyButtons from "../../../components/MyButtons";


const GoogleForms = () => {
  const currentUser = useCurrentUser();
  const [authors, setAuthors] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{data : authors}] = await Promise.all([
          axiosReq.get(`/authors`)
        ]);
        setAuthors(authors)
        setHasLoaded(true)

      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false)
    handleMount();
  }, []);

  return (
    
    <>

  <HeroComponent 
        h1={`Tips about Google Forms`} />
         
         
          {hasLoaded ? (<><Row>
        <Col md={{ span: 8, offset: 1 }} className={styles.MainContent}><section>

          <FilteredTipsFeed category_value="forms" /></section>
        </Col>


        {currentUser && <>    <MyInfo  
        {...authors.results[0]} setAuthors = {setAuthors}
        filter={currentUser?.pk} /></>}
    
    {!currentUser && (
          <>
            <Col md={{ span: 3 }} className={styles.AuthorContent}>
              <h4 className={styles.Heading}>Benefits to having an account</h4>
              <div className={styles.Text}>
                You can:
                <ul>
                  <li>
                    Save useful tips so you can easily refer to them again
                  </li>
                  <li>Share your own tips to help others</li>
                  <li>
                    Rate tips to help others find the most useful information
                  </li>
                </ul>
              </div>

              <Link to="/sign-up">
                <MyButtons green text="Sign Up" />
              </Link>
              <Link to="/sign-in">
                <MyButtons green text="Sign In" />
              </Link>
            </Col>
          </>
        )}

</Row></>) : (<MySpinner/>)}


    </>
  )
}

export default GoogleForms