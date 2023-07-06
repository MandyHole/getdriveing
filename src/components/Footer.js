import React from 'react'
import styles from '../styles/Footer.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div>
        <Container fluid className={styles.Footer}>
            <Row >
                <Col md={{ span: 12}}>
        <p>Please note that this website is not affiliated with Google</p></Col></Row></Container></div>
  )
}

export default Footer