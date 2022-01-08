import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Data from '../components/Data'
import data from '../data'

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {data.map((data) => (
          <Col key={data.url} sm={12} md={6} lg={4} xl={3}>
            <Data data={data} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
