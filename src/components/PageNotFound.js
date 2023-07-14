import React from 'react'
import HeroComponent from "../components/HeroComponent"
import heroStyles from "../styles/HeroComponent.module.css"

const PageNotFound = () => {
  return (
    <div><HeroComponent additional_class={heroStyles.FullHeight} 
        h1="Whoops...this page doesn't exist!" 
        not_found /> 
    </div>
  )
}

export default PageNotFound