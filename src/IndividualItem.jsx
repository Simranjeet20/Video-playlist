import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from "./CSS/Topic.module.css";

export default function IndividualItem({value, index}) {
  return (
    <>
     <Row>
         <Col className='col-md-8'>
         {index +1}.<span className={`${style.text}`}>{value.name}</span>
         </Col>
         <Col className='col-md-4'>
             <Link to={"/video?id=" +value.link} className='ms-2 px-4 py-1'>
         <Button className={`${style.text}`} style={{backgroundColor:'#304352'}}>Click me</Button>
         </Link>
         </Col>
    </Row>
    </>
  )
}
