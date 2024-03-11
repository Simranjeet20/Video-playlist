import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function IndividualItem({value, index}) {
  return (
    <>
     <Row>
         <Col className='col-md-8'>
         {index +1}.{value.name}
         </Col>
         <Col className='col-md-4'>
             <Link to={"/video?id=" +value.link} className='ms-2 px-4 py-1' variant='success'>
         <Button>Click me</Button>
         </Link>
         </Col>
    </Row>
    </>
  )
}
