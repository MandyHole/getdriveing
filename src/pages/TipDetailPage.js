import React from 'react';
import boxStyles from '../styles/HeroBox.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Tips.module.css'
import Image from 'react-bootstrap/Image';import Button from 'react-bootstrap/Button';
import AuthorImage from '../assets/blank-profile-picture-gb6ded336d_640.png'
import btnStyles from '../styles/Buttons.module.css'

const TipDetailPage = () => {
  return (
    <>
    <div className={boxStyles.BoxBackground}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>Title of Tip</h1>
            <h2>Category of Tip, Ability Level</h2>
            <h3>Current Rating, Saved XXX Times</h3>
          </Col>
        </Row>
      </Container>
      </div>
      <Row>
      <Col md={{ span: 7, offset: 1}} className={styles.TipContent}>
            <p>Tip odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viver: excerpt of tip...

Tip odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viver: excerpt of tip...

Tip odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viver: excerpt of tip... Tip odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viver: excerpt of tip...</p>
          </Col>
          <Col md={{ span: 4}} className={styles.AuthorContent}>

            <h1>Author's Profile</h1>
            <Image src={AuthorImage} roundedCircle className={styles.Image}></Image>
            <p className={styles.Name}>Name</p>
            <p className={styles.AuthorBody}>Member since: xxx</p>
            <p className={styles.AuthorBody}>Bio text</p>
            <p className={styles.AuthorBody}>Number of Tips</p>

            <Button className={btnStyles.GreenButtons}>Author's Tips</Button>
            </Col>

        </Row>

     
      
      </>
  )
}

export default TipDetailPage