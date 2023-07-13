import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Tips.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Tips from "../tips/Tips"
import TipHeroes from "./TipHeroes"
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentForm from "../comments/CommentForm";
import PreviousComments from "../comments/PreviousComments";
import appStyles from "../../App.module.css"
import AuthorInfo from "../../components/AuthorInfo";


function TipDetailPage() {
  const currentUser = useCurrentUser();
  const author_image = currentUser?.author_image;
  const [comments, setComments] = useState({ results: [] });
  const { id } = useParams();
  const [tips, setTips] = useState({ results: [] });
  const [authors, setAuthors] = useState({ results: [] });


  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: tips }, { data : comments}, {data : authors}] = await Promise.all([
          axiosReq.get(`/tips/${id}`),
          axiosReq.get(`/comments/?tip=${id}`),
          axiosReq.get(`/authors`)
        ]);
        setTips({ results: [tips] });
        setComments(comments)
        setAuthors(authors)
        console.log(authors)
        console.log(tips)

      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <>
 {tips.results.length ?(<>
    <TipHeroes {...tips.results[0]} setTips = {setTips} tipDetail /></>) : (null)}


              <Row>

        <Col md={{ span: 8, offset: 1 }} className={styles.TipContent}>
        <Tips {...tips.results[0]} setTips = {setTips} tipDetail/>


          {currentUser ? (
                      <><hr className={styles.HR} />
                      <h3 className={appStyles.ContentHeader}>Add a Comment</h3>
  <CommentForm
  author_id={currentUser.author_id}
  authorImage={author_image}
  tip={id}
  setTips={setTips}
  setComments={setComments} /></>) : null}
  <hr className={styles.HR} />  <h3 className={appStyles.ContentHeader}>
    Previous Comments</h3>
    <p className={appStyles.Center}>
{ comments.results.length ? (null) : currentUser ? ('Make the first comment using the form above') : ('No comments have been made yet') }
</p>
    { comments.results.length ? (
  comments.results.map((comment) => (<PreviousComments  key={comment.id} {...comment} 


/>
    ))

  
 ) : null }
  
    


          


        </Col>

        {/* tips.results.map((tip) => ( */}
        {tips.results.length ? (
        <AuthorInfo 
        {...tips.results[0]} setTips = {setTips}
        {...authors.results[0]} setAuthors = {setAuthors}
        filter={tips.results[0].owner_id}/>) : (<></>)}
        
        {/* )) */}
        </Row>
    </>
  );
}

export default TipDetailPage;
