import React, { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";

export default function JSON() {
  const [userData, setUserData] = useState<[] | null >(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log("Error Fetching the data: ", error));
  }, []);

  if (userData?.length === 0) {
    return <div></div>;
  }
    // Filter and get only the 9th user
    const firstNineUser = userData?.slice(0,9);
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
          {firstNineUser?.map((user, index) => (
                <UserCard key={index} user={user}/>
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
