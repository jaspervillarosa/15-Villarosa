import React from "react";
import { Button, Nav } from "react-bootstrap";
import Footer from "../components/Footer";

export default function Calculator() {
  return (
    <div className="calculator-Main">
      <div className="hobby-Innermain">
        {/* Navigation section */}
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

      <div className="calculator-innerMain">
        <div className="calculatorIcon">
          <img className="calculatorLaptop" src="src/image/laptop.png" alt="" />
          <div className="toolTip">
            <span className="tooltipText">Calculator</span>
            <a href="/calculator2">
              <div className="calculator-imgDiv">
                <img
                  src="src/image/calc_icon.png"
                  alt="HTML tutorial"
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Calculator UI section */}
      <div className="calculator-innerMain">
        {/* ... (your calculator UI code) ... */}

        <div className="calculator-Title">
          <div className="calculator-innerDivTitle">
            <h1>CALCULATOR</h1>
            <h3> See more </h3>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
}
