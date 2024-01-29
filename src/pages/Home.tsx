import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function home() {
  return (
    <div className='Main'>
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
        <div className="buttons">
            <Button variant="light" href='./Calculator'>Calculator Sample</Button>{' '}
            <Button variant="dark" href='./JSON'>JSON Sample</Button>
        </div>
        <div className="myHobbies">

        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>My Hobbies</Card.Title>
        <Card.Text>
        Hey there! Ready to embark on a journey through my interests? Click the button below to uncover the fascinating world of my hobbies, and who knows, we might just discover some shared passions! Get ready for a laugh and a peek into what makes me tick!
        </Card.Text>
        <Button variant="secondary" href='./MyHobby'>Learn More</Button>
      </Card.Body>
    </Card>
    
        </div>
    </div>


  )
}
