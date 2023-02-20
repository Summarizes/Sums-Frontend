import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap'

const BundleCard = ({ bundle_id, title , subject, subject_id, description, price=0 }) => {

  const nevigate = useNavigate()

  return (
    <Card
      className='bundle-card-body mx-auto overflow-hidden'
    >
      <img className='overflow-hidden' alt='sample' src='https://www.echollywell.co.uk/wp-content/uploads/blank-00cc00_040004000.png'/>
      <CardBody>
        <CardTitle><h5>{title}</h5></CardTitle>
        <CardSubtitle>{subject_id}</CardSubtitle>
        <CardSubtitle><span className='text-xs'>
          {subject}  
        </span></CardSubtitle>
        <CardSubtitle><span className=''>
          {(price).toFixed(2)} THB
        </span></CardSubtitle>
        <Row>
          <Col>
          <Button className='but-2' onClick={() => nevigate('/')}>Buy</Button>
          </Col>
          <Col>
          <Button onClick={() => nevigate('/')}>Detail</Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default BundleCard