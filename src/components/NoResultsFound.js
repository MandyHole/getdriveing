import React from 'react'
import styles from "../styles/NoResultsFound.module.css"

const NoResultsFound = (message="Sorry, no results found - try a different search!") => {
  return (
    <div className={styles.NoResultsContainer}><div className={styles.Icon}><i className="fa-solid fa-magnifying-glass-minus fa-bounce"></i></div><div className={styles.Message}>{message}</div></div>
  )
}

export default NoResultsFound