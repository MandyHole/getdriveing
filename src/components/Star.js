import React from 'react'
import styles from "../styles/Stars.module.css"

const Star = ({hero_solid, hero_outline, overview_solid, overview_outline}) => {
  return (
    <>
    {overview_solid && <i className={`fa-solid fa-star ${styles.OverviewStar}`}></i>}
    {hero_solid && <div><i className={`fa-solid fa-star ${styles.HeroStar}`}></i></div>}
    {overview_outline && <i className={`fa-regular fa-star ${styles.OverviewStar}`}></i>}
    {hero_outline && <div><i className={`fa-regular fa-star ${styles.HeroStar}`}></i></div>}
    </>
  )
  
}

export default Star