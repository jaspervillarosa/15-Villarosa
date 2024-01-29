import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function home() {
  return (
    <Container className='home-Main vw-100'>
        <Row className='d-flex justify-content-center'>
            <Col className='text-center justify-content-center home-innerMain'>
                <div className="home-Headline">
                <div className='title'>
                    <h1>
                        DIGITAL TRANSFORMATION
                    </h1>
                </div>
                <div className='myName'>
                        <h2>
                            Created by <Badge bg="secondary">Jasper Villarosa</Badge>
                        </h2>
                </div>
                <div className="home-Buttons">
                    <Button className='home-insideButton' variant="light" href='./Calculator'>Calculator Sample</Button>{' '}
                    <Button className='home-insideButton' variant="dark" href='./JSON'>JSON Sample</Button>
                </div>
                </div>  
            <div className="myHobbies">
            <Card className='home-Card' style={{ width: '18rem' }}>
            <Card.Body className='home-Cardbody'>
                <Card.Title>My Hobbies</Card.Title>
                <Card.Text>
                Hey there! Ready to embark on a journey through my interests? Click the button below to uncover the fascinating world of my hobbies, and who knows, we might just discover some shared passions! Get ready for a laugh and a peek into what makes me tick!
                </Card.Text>
                <Button variant="secondary" href='./MyHobby'>Learn More</Button>
            </Card.Body>
            </Card>
            </div>
            </Col>
                
        </Row>
    </Container>


  )
}
