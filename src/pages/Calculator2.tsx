import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Nav } from "react-bootstrap";
import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";

export default function Calculator2() {



  return (
    <div className="calculator-Main">
      <div className="hobby-Innermain">
        <Nav
          className="hobby-Nav"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Button className="hobby-Calculator" href="/Calculator">
              <del>calculator</del>
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button className="hobby-JSON" href="/JSON">
              JSON
            </Button>
          </Nav.Item>
        </Nav>
      </div>
      

      <Footer />
      <HomeNav></HomeNav>
    </div>
  );
}
