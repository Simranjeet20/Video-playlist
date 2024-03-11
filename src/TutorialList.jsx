import React from 'react'
import { Button, Card, CardBody, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import IndividualItem from './IndividualItem'
import style from './CSS/Topic.module.css'

export default function TutorialList() {
    const topic=[
        {
            name:'Personality Development Tips to Attract & Impress Anyone',
            link:'sWteTJ46qzI&list=PLxNHpNhDaEFITDZXhEdybTxMOeh206-Nb&index=2'

        },
        {
            name:'Improve Your Sense of Humour',
            link:'5CoKwpezDFE&list=PLWc1yfTYfqNFfeyUbhfUXY1LJrBGiPeGL&index=1'
        },
        {
            name:'Confident Body Language Tips',
            link: "QLqTYtka2Vg&list=PLWc1yfTYfqNFfeyUbhfUXY1LJrBGiPeGL&index=2",
        },
        {
            name:'Confidence for Job Interview ',
            link: "M4iHa7gHvNI&list=PLWc1yfTYfqNFfeyUbhfUXY1LJrBGiPeGL&index=3",
        },
        {
            name:'Smart Dressing Sense & Hygiene',
            link: "rDjYio4xlZ0&list=PLWc1yfTYfqNFfeyUbhfUXY1LJrBGiPeGL&index=4",
        },
        {
            name:'Speak English with Confidence',
            link: "Y07dnUKwqyw&list=PLWc1yfTYfqNFfeyUbhfUXY1LJrBGiPeGL&index=5",
        },
        {
            name:'Extraordinary Communication Skills',
            link: "VczVqHJW0gg&list=PLWc1yfTYfqNFfeyUbhfUXY1LJrBGiPeGL&index=6",
        },
        {
            name:'How to Build Self Confidence?',
            link: "Y07dnUKwqyw&list=PLWc1yfTYfqNFfeyUbhfUXY1LJrBGiPeGL&index=7",
        },
        {
            name:'How to Increase Confidence',
            link: "_RCGS_pe0B4&list=PLxNHpNhDaEFITDZXhEdybTxMOeh206-Nb&index=11",
        },
        {
            name:'How to Develop an Attractive Personality?',
            link: "vzdxto6-hDI&list=PLxNHpNhDaEFITDZXhEdybTxMOeh206-Nb&index=12",
        },
    
       
    ]
  return (
    <>
   <div style={{backgroundImage:'linear-gradient(#304352, #d7d2cc)'}}>
    <center className='py-3'> 
        <Card border='success' style={{ width: '450px',  backgroundColor:'#ced4da'}}>
            <CardBody className={`${style.text}`} >
            <h3 className='pt-1 pb-1 '>Tips and Tricks for <h2 style={{color:'#c71104'}}>Personality Development</h2></h3>

            </CardBody>
        </Card>
   
    
    </center>
    <ListGroup style={{paddingBlockEnd:'30px'}}>
        {
            topic.map((value,index)=>{
                return(<>
               <Container>
                <ListGroup.Item  action variant="dark" style={{color:'black'}}>
                   <IndividualItem value={value} index={index} />
                </ListGroup.Item>
                </Container>
                
                </>
                )
            })
        }      
    </ListGroup>
    </div>
    </>
  )
}
