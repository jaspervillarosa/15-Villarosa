import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function home() {
  return (
    <div className="home-Main">
      <Header />
      <Row className="d-flex justify-content-center">
        <Col className="text-center justify-content-center home-innerMain">
          <div className="home-mainContainer">
            <div className="home-myHobbies myHobbies">
              <div className="homeContent">
                <h3>
                  Hey there, <br></br>
                  <br />
                  I'm Jasper. I'm interested in designing meaningful experiences
                  that shape how we interact with technology.
                  <br />
                  <br />
                  ‍ I'm currently a junior research & development engineer for
                  Advance World Solution, a better place to grow.
                  <br />
                  <br />
                  Previously, I studied Computer Science at University of the
                  Philippines, where I wrote my thesis on detecting Pest
                  Diseases using machine learning. Before that, I worked with
                  brands to create digital products like HousifyPH. I spend my
                  time taking photos, and exploring places.
                  <br />
                  <br />
                  Let's chat — jvillarosa@up.edu.ph
                  <br></br>
                  <br />
                  <a href="./MyHobby">Learn More</a>
                </h3>
              </div>
            </div>
            <div className="home-phoneImage">
              <img
                className="home-imgPhone"
                src="src/image/phoneGraphics.png"
                alt=""
              />
            </div>
          </div>
          <div className="home-Headline">
            <div className="homeTitle">
              <h1>Digital Transformation</h1>
              <h5>Design and more</h5>
            </div>
          </div>
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  );
}
