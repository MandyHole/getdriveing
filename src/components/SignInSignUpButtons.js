import React from 'react'
import btnStyles from "../styles/Buttons.module.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const SignInSignUpButtons = () => {
  return (
            <div className={btnStyles.CenterButtons}>
        
    <Link to="/sign-up">
          <Button
            size="lg"
            variant="dark"
            className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
          >
            Sign Up
          </Button></Link>
          <Link to="/sign-in">
          <Button
            size="lg"
            variant="dark"
            className={`${btnStyles.HeroButtons} ${btnStyles.Buttons}`}
          >
            Sign In
          </Button></Link>
          </div>
  )
}

export default SignInSignUpButtons