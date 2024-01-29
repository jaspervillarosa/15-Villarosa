import React, { useEffect, useState } from 'react'
import { Card, Container, ListGroup } from 'react-bootstrap';


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  }

export default function JSON() {

    const [userData, setUserData] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.log("Error Fetching the data: ", error))
    }, []);

    if (userData.length === 0){
        return <div></div>
    }
  return (

    <Container className="json-Main vw-100">
         <div className='title'>
            <h1>
                USER INFORMATION
            </h1>
        </div>
    <div className="json-insideMain">
    {userData.map((user) => (
        <>
        <Card className='json-Card' style={{width: "18rem"}}> 
            <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                        Username: {user.username}
                    </Card.Subtitle>
                    <Card.Text>
                        Email: {user.email}
                    </Card.Text>
                    <ListGroup className='List group-flush'>
                        <ListGroup.Item>Street: {user.address.street}</ListGroup.Item>
                        <ListGroup.Item>Suite: {user.address.suite}</ListGroup.Item>
                        <ListGroup.Item>City: {user.address.city}</ListGroup.Item>
                        <ListGroup.Item>Zipcode: {user.address.zipcode}</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
        </>
        ))}
    </div>
    
    </Container>
   
  )
}
