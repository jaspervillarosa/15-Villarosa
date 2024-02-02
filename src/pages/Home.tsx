import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function home() {
  return (
    <div className='home-Main'>
    <Header/>
        <Row className='d-flex justify-content-center'>
            <Col className='text-center justify-content-center home-innerMain'>
            <div className="home-mainContainer">
                <div className="home-myHobbies myHobbies">
                <div className="homeContent">
                    <h3>
                    Hey there, <br></br>
                    <br />
                    I'm Aileen. I'm interested in designing meaningful experiences that shape how we interact with technology. 
                    <br /><br />
                    ‍
                    I'm currently designing experiences to make Amazon a better place to discover and research products. 
                    <br />
                    <br />

                    Previously, I studied Communication Design at BTK Berlin, where I wrote my thesis on the effects of biases in design. Before that, I worked with brands to create digital products at Edenspiekermann. 
                    I spend my time taking photos, drawing, and exploring places. 
                    <br />
                    <br />
                    
                    Let's chat — hello@aileen.co
                    <br></br>
                    <br />
                    <a href='./MyHobby'>Learn More</a>
                    </h3>
                </div>
                </div>
                <div className="home-phoneImage">
                    <img className='home-imgPhone' src="src/image/phoneGraphics.png" alt="" />
                </div>
            </div>
            <div className="home-Headline">
                <div className='homeTitle'>
                    <h1>
                        Digital Transformation
                    </h1>
                    <h5>Design and more</h5>
                </div>
                
                </div>  

            </Col>
        </Row>
        <Footer></Footer>
    </div>


  )
}
