import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap';


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
        return <div>Loading ... </div>
    }
  return (

    <div className="JSON-main">
         <div className='title'>
            <h1>
                USER INFORMATION
            </h1>
        </div>
   
        <Card style={{width: "18rem"}}> 
            {userData.map((user) => (
            <>
            <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                        Username: {user.username}
                    </Card.Subtitle>
                    <Card.Text>
                        Email: {user.email}
                    </Card.Text>
            </Card.Body>
            <ListGroup className='List group-flush'>
                        <ListGroup.Item>Street: {user.address.street}</ListGroup.Item>
                        <ListGroup.Item>Suite: {user.address.suite}</ListGroup.Item>
                        <ListGroup.Item>City: {user.address.city}</ListGroup.Item>
                        <ListGroup.Item>Zipcode: {user.address.zipcode}</ListGroup.Item>
            </ListGroup>
            </>
            ))}
        </Card>
    </div>
   
  )
}
