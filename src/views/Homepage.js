import React from 'react'
import { Col, Container, Input, Row } from 'reactstrap'
import BundleCard from '../components/BundleCard'

const Homepage = () => {

  const dataObject = {
    'bundle_id' : '1',
    'subject_id': '01222222',
    'title' : 'Sample 1',
    'subject' : 'Subject 1',
    'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'price' : '300'
  }

  const data = [
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,
    dataObject,

  ]

  return (
    <div className='mx-16 mt-16 homepage'>
      <div className='text-left'>
        <h3 className='ml-12 search-bundle-title p-3 inline'>Search Bundle</h3>
      </div>
      <Container className='overflow-hidden search-body mb-12'>
        <div className='w-1/3 my-12 mx-auto'>
          <Input className='search-bundle-bar'/>
        </div>
        <Row className='w-5/6 mx-auto'>
        {
          data ? data.map((bundle) => (
          <Col sm='3' className='mb-12'>
            <BundleCard 
              bundle_id={bundle.bundle_id}
              subject_id={bundle.subject_id}
              title={bundle.title}
              subject={bundle.subject}
              description={bundle.description}
              price={bundle.price}
              />
           </Col>
          )) : null
        }
        </Row>
      </Container>
    </div>
  )
}

export default Homepage