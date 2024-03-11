import React from 'react'
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import IndividualItem from './IndividualItem'

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
                   <IndividualItem value={value} index={index}/>
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
