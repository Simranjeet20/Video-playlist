import React from 'react'
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TutorialList() {
    const topic=[
        {
            name:'How to develop personality',
            link:'LnkHdqlN6dA'
        },
        {
            name:'How to develop personality',
            link: "7wnove7K-ZQ",
        },
        {
            name:'How to develop personality',
            link: "7wnove7K-ZQ",
        },
        {
            name:'How to develop personality',
            link: "7wnove7K-ZQ",
        },
        {
            name:'How to develop personality',
            link: "7wnove7K-ZQ",
        },
    ]
  return (
    <>
    <center>
    <h3>Tips and Tricks for Personality Development</h3>
    </center>
    <ListGroup >
        {
            topic.map((value,index)=>{
                return(<>
               <Container>
                <ListGroup.Item>
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
                </ListGroup.Item>
                </Container>
                
                </>
                )
            })
        }      
    </ListGroup>
    </>
  )
}
