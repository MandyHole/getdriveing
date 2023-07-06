import React from 'react'

const TipDetailPage = () => {
  return (
    <>
    <div className={styles.BoxBackground}>
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
      
      </>
  )
}

export default TipDetailPage