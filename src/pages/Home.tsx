import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";

export default function home() {
  return (
    <div className="home-Main">
      <Header />
      <Row className="d-flex justify-content-center">
        <Col className="text-center justify-content-center home-innerMain">
          {/* Sa taas ni Digitak tRansformation */}
          <div className="home-mainContainer">
            <div className="home-myHobbies myHobbies">
              <div className="homeContent">
                <p>
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
                  Philippines, where I wrote my thesis on prediciting pest
                  damages and provide solutions using machine learning. While at
                  school, I worked with brands to create digital products like
                  HousifyPH. I spend my time taking photos, and exploring
                  places.
                  <br />
                  <br />
                  Let's chat — jvillarosa@up.edu.ph
                  <br></br>
                  <br />
                  <a href="./MyHobby">Learn More</a>
                </p>
              </div>
            </div>
            <div className="home-phoneImage">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img
                      className="home-imgPhone"
                      src="public/image/phoneGraphics.png"
                      alt=""
                    />
                  </div>
                  <div className="flip-box-back">
                    <img
                      className="home-imgPhone2"
                      src="public/image/iphone.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Digital Transformation */}
          <div className="home-Headline">
            <div className="homeTitle">
              <h1>Digital Transformation</h1>
              <h5>Design and more</h5>
            </div>
          </div>
          <div className="homeDesignBottom">
            <div className="homeBottomUpper">
              <div className="homeDesignBottomTitle">
                <h1>Designing for a meaningful experience</h1>
              </div>
              <div className="homeDesignBottomContent">
                <p>
                  How can we engage into circuits of meaningful experience? By
                  tapping into our motivations and celebrating small
                  accomplishments. I focused on designing from an experience
                  level rather than a product level, as seen below.
                </p>
              </div>
            </div>
            <div className="homeBottomImg">
                <img src="public/image/homeImg1.png" alt="" />
            </div>
          </div>
        </Col>
      </Row>
      <Footer></Footer>
      <HomeNav></HomeNav>
    </div>
  );
}
