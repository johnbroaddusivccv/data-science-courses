import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Data = ({ data }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Card.Body>
          <Card.Title as='div'>
            <Link to={`${data.url}`}>
              <Card.Img
                src='https://source.unsplash.com/random/?technology'
                variant='top'
              />
            </Link>

            {/*  */}
            <strong>{data.name}</strong>
            <small>{data.description}</small>
          </Card.Title>

          <Card.Text as='div'>{` ${data.host} `}</Card.Text>
          <Card.Text as='div'>{` ${data.rating} `}</Card.Text>
          <Card.Text as='div'>{` ${data.lectures} `}</Card.Text>
          <Card.Text as='div'>{` ${data.level} `}</Card.Text>
          <Card.Text as='a'>{` ${data.url} `}</Card.Text>

          <Card.Text as='h3'>${data.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Data
