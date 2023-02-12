import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const BundleCard = ({ bundle_id, title , subject, subject_id, description, price }) => {
  return (
    <Card
      className='bundle-card-body mx-auto overflow-hidden'
    >
      <img className='overflow-hidden' alt='sample' src='https://www.echollywell.co.uk/wp-content/uploads/blank-00cc00_040004000.png'/>
      <CardBody>
        <CardTitle><h5>{title}</h5></CardTitle>
        <CardSubtitle>{subject}</CardSubtitle>
        {/* <CardText><p>{description}</p></CardText> */}
        <Link to={'/'}>
          <Button>Detail</Button>
        </Link>
      </CardBody>
    </Card>
  )
}

export default BundleCard