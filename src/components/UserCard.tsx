import React from "react";
import { Card } from "react-bootstrap";

interface User {
  user: {
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
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

const randomProfilePhotos = [
  "/image/img1.jpg",
  "/image/img2.jpg",
  "/image/img3.jpg",
  "/image/img4.avif",
  "/image/img5.jpeg",
  "/image/img6.avif",
  "/image/img7.avif",
  "/image/img8.jpeg",
  "/image/img9.avif",
  "/image/img10.avif",
];

// Shuffle the array using Fisher-Yates algorithm
const shuffledProfilePhotos = randomProfilePhotos.slice();
for (let i = shuffledProfilePhotos.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledProfilePhotos[i], shuffledProfilePhotos[j]] = [
    shuffledProfilePhotos[j],
    shuffledProfilePhotos[i],
  ];
}

export default function UserCard({ user }: User) {
  return (
    <div>
      <>
        <Card className="json-Card" style={{ width: "18rem" }}>
          <Card.Body>
            <div className="JSON-userProfile">
              <div className="JSON-profileImage">
                <img
                  src={
                    shuffledProfilePhotos[
                      user.id % shuffledProfilePhotos.length
                    ]
                  }
                  alt={`Profile ${user.id}`}
                />
              </div>
              <div className="JSON-otherProfile">
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Username: {user.username}
                </Card.Subtitle>
              </div>
            </div>
            <div className="hello">
              <h1>
                Employed at {user.company.name}, {user.name} is recognized as{" "}
                {user.company.catchPhrase} within the domain of{" "}
                {user.company.bs}.
              </h1>
              <br />
              <br />
              <h5>Find out more ⭢</h5>
            </div>
            <div className="cardInnerContainer">
              <Card.Text>Email: {user.email}</Card.Text>
              <Card.Text>Street: {user.address.street}</Card.Text>
              <Card.Text>Suite: {user.address.suite}</Card.Text>
              <Card.Text>City: {user.address.city}</Card.Text>
              <Card.Text>Zipcode: {user.address.zipcode}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </>
    </div>
  );
}
