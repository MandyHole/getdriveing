import React, { useEffect } from "react";
import TipsFeed from '../../components/TipsFeed'
import HeroComponent from '../../components/HeroComponent'
import AuthorInfo from '../../components/AuthorInfo'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import MyInfo from "../../components/MyInfo";


const AuthorsTips = () => {
    const { id } = useParams()
    const [author, setAuthor] = useState({ results: [] });
    const [tips, setTips] = useState({ results: [] });
    console.log(author)


    useEffect(() => {
        const handleMount = async () => {
          try {
            const [{ data: tips }, {data : author}] = await Promise.all([
              axiosReq.get(`/tips/`),
              axiosReq.get(`/authors/${id}`)
            ]);
            setAuthor({ results: [author] });
            setTips(tips)
    
          } catch (err) {
            console.log(err);
          }
        };
        handleMount();
      }, [id]);



  return (<>
   
                {/* {author.results.length ? (<>
        <><HeroComponent h1={`Tips by ${author.name}`} */}
        {/* /></><><TipsFeed /></> <><AuthorInfo filter={id}/></></>):(null)} */}
        
        {author.results.length ? (
        <MyInfo
        {...author.results[0]} setAuthors = {setAuthor}
        {...tips} setTips = {setTips}
        filter={id}  author_tip_page/>) : (<></>)}

</>
  )
}

export default AuthorsTips