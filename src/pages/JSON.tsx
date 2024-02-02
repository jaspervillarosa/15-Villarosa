import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup, Nav } from 'react-bootstrap';
import Footer from '../components/Footer';
// import { Avatar, AvatarGroup } from '@mui/material';


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

    <div className="json-Main">
        <div className="hobby-Innermain">
        <Nav className='hobby-Nav'
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Button className='hobby-Calculator' href="/Calculator">calculator</Button>
            </Nav.Item>
            <Nav.Item>
                <Button className='hobby-JSON' href='/JSON'><del>JSON</del></Button>
            </Nav.Item>
        </Nav>
      </div>
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
                <div className="JSON-userProfile">
                    <div className="JSON-profileImage">{user.id}</div>
                    <div className="JSON-otherProfile">
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                        Username: {user.username}
                    </Card.Subtitle>
                    </div>
                </div>
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
    <Footer></Footer>
    </div>
   
  )
}
