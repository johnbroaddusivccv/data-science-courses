import React from 'react'
import { Card } from 'react-bootstrap'

const Data = ({ data }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Card.Body>
          <Card.Title as='div'>
            <strong>{data.name}</strong>
          </Card.Title>

          <Card.Text as='div'>
            value={data.rating}
            text={` ${data.description} `}
          </Card.Text>

          <Card.Text as='h3'>${data.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Data
