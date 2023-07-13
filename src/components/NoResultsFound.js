import React from 'react'
import styles from "../styles/NoResultsFound.module.css"

const NoResultsFound = () => {
  return (
    <div className={styles.NoResultsContainer}><div className={styles.Icon}><i className="fa-solid fa-magnifying-glass-minus fa-bounce"></i></div><div className={styles.Message}>Sorry, no results found!</div></div>
  )
}

export default NoResultsFound