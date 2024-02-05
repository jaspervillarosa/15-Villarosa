import React, { useEffect, useState } from "react";
import { Button, Card, Nav } from "react-bootstrap";
import Footer from "../components/Footer";

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
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function JSON() {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log("Error Fetching the data: ", error));
  }, []);

  if (userData.length === 0) {
    return <div></div>;
  }

  const randomProfilePhotos = [
    "src/image/img1.jpg",
    "src/image/img2.jpg",
    "src/image/img3.jpg",
    "src/image/img4.avif",
    "src/image/img5.jpeg",
    "src/image/img6.avif",
    "src/image/img7.avif",
    "src/image/img8.jpeg",
    "src/image/img9.avif",
    "src/image/img10.avif",
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

    // Filter and get only the 9th user
    const firstNineUser = userData.slice(0,9);
  return (
    <div className="json-Main">
      <div className="hobby-Innermain">
        <Nav
          className="hobby-Nav"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Button className="hobby-Calculator" href="/Calculator">
              calculator
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button className="hobby-JSON" href="/JSON">
              <del>JSON</del>
            </Button>
          </Nav.Item>
        </Nav>
      </div>
      <div className="json-userInformationContent">
        <div className="jsonUpperh1">
          <h1>User Information & Background</h1>
        </div>
        <div className="jsonUpperP">
          <p>
            This data-driven strategy fosters increased user engagement and
            enables the formulation of impactful marketing strategies,
            contributing to business growth. <br />
            <br />
            In personalized interactions, user information is invaluable in
            e-commerce, social media, and online services, empowering businesses
            to curate tailored content, offer individualized recommendations,
            and deepen overall user satisfaction. <br />
          </p>
        </div>
      </div>
      <div className="JSON-innerContainer">
        {/* <div className="title">
          <h1>USER INFORMATION</h1>
        </div> */}
        <div className="json-insideMain">
          {firstNineUser.map((user, index) => (
            <>
              <Card className="json-Card" style={{ width: "18rem" }}>
                <Card.Body>
                  <div className="JSON-userProfile">
                    <div className="JSON-profileImage">
                      <img
                        src={
                          shuffledProfilePhotos[
                            index % shuffledProfilePhotos.length
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
                      Employed at {user.company.name}, {user.name} is recognized
                      as {user.company.catchPhrase} within the domain of{" "}
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
          ))}
        </div>
      </div>
      <div className="userUpperDesign">
        <img src="src/image/calculatorbg.png" alt="" />
      </div>
      <Footer></Footer>
    </div>
  );
}
