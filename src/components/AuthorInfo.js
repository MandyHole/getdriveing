import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../styles/TipsFeed.module.css";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../api/axiosDefaults";
import { Link } from "react-router-dom/cjs/react-router-dom";
import btnStyles from "../styles/Buttons.module.css";
import DeleteModal from "./DeleteModal";
import MySpinner from "./MySpinner";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import NoResultsFound from "./NoResultsFound";
import ProfilePic from "./ProfilePic";

const AuthorInfo = ({ filter }) => {
  const [authors, setAuthors] = useState({ results: "" });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { data } = await axiosReq.get(`/authors/${filter}`);
        setAuthors(data);
        setHasLoaded(true);
        console.log(filter)
      } catch (err) {
        console.log(err);
        console.log(filter)
      }
    };
    setHasLoaded(false);
    fetchAuthors();
  }, [filter]);

  return (
    <>
       {hasLoaded ? (
    
                 <>
                  <ProfilePic src={authors.image} size = "150px"/>
                  {authors.name.length ? (<p className={styles.Name}>{authors.name}'s Profile</p>): (<p className={styles.Name}>{authors.owner}'s Profile</p>)}
                  <p className={styles.AuthorBody}>Member since: {authors.created_on}</p>
                  <p className={styles.AuthorBody}>{authors.bio}</p>
                  <p className={styles.AuthorBody}>Tips created: {authors.number_tips_created}</p>
                  <p className={styles.AuthorBody}>Tips saved: {authors.number_tips_saved}</p>
        
                  <Button className={btnStyles.GreenButtons}>Edit profile</Button>
                  </>

              )
         

    
       : (

        <MySpinner />
      )}
    </>)}

export default AuthorInfo;
