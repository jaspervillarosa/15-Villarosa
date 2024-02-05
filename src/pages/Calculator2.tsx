import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Nav } from "react-bootstrap";
import Footer from "../components/Footer";

export default function Calculator2() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleButtonClick = (value: string | number) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult(null);
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

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
      <div className="calculator-innerMain">
        <div className="calculator-UI">
          <div className="calculator-Input">
            <Form.Control
              type="text"
              value={result !== null ? result : input || "0"}
              readOnly
              aria-label="Result"
              className="calculator-inputContent" // Align input text to the right
            />
          </div>

          <div className="calculator-Numbers">
            <div className="calculator-buttonNumber">
              {["(", ")", "mc", "m+", "m-", "mr",
                "AC",
                "+/-",
                "%",
                "/","2nd", "x²", "x³", "xy", "ex", "10x",
                7,
                8,
                9,
                "*", "1/x", "2√x", "3√x", "y√x", "ln", "log₁₀",
                4,
                5,
                6,
                "-","x!", "sin", "cos", "tan", "e", "EE",
                1,
                2,
                3,
                "+","Rad", "sinh", "cosh", "tanh", "π", "Rand",
                "",
                0,
                ".",
                "=",
              ].map((item, index) => (
                <button
                  key={item}
                  className={
                    item === "/" ||
                    item === "*" ||
                    item === "-" ||
                    item === "+" ||
                    (item === "=" && index % 10 === 9)
                      ? "calculator-Secondary calculator-Last"
                      : 
                      item === "(" || item === ")" || item === "mc" || item === "m+" || item === "m-" || item === "mr" ||
                      item === "2nd" || item ===  "x²" ||item ===  "x³" || item ===  "xy" || item ===  "ex" || item ===  "10x" ||
                      item === "1/x" || item === "2√x" || item === "3√x" || item === "y√x" || item === "ln" || item === "log₁₀" ||
                      item === "x!" ||  item === "sin" || item === "cos" || item === "tan" || item === "e" || item === "EE" ||
                      item === "Rad" || item === "sinh" || item === "cosh" || item === "tanh" || item ===  "π" || item ===  "Rand" ||
                      item === "AC" || item === "+/-" || item === "%"
                      ? "calculatorGray calculator-Last"
                      : "calculatorDark calculator-First"
                  }
                  onClick={() => {
                    if (typeof item === "string") {
                      if (item === "=") {
                        handleCalculate();
                      } else if (item === "AC") {
                        handleClear();
                      } else {
                        handleButtonClick(item);
                      }
                    } else {
                      handleButtonClick(item.toString());
                    }
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="calculator-UI2">
          <div className="calculator-Input">
            <Form.Control
              type="text"
              value={result !== null ? result : input || "0"}
              readOnly
              aria-label="Result"
              className="calculator-inputContent" // Align input text to the right
            />
          </div>

          <div className="calculator-Numbers">
            <div className="calculator-buttonNumber">
              {[
                "AC",
                "+/-",
                "%",
                "/",
                7,
                8,
                9,
                "*",
                4,
                5,
                6,
                "-",
                1,
                2,
                3,
                "+",
                "",
                0,
                ".",
                "=",
              ].map((item, index) => (
                <button
                  key={item}
                  className={
                    item === "/" ||
                    item === "*" ||
                    item === "-" ||
                    item === "+" ||
                    (item === "=" && index % 4 === 3)
                      ? "calculator-Secondary calculator-Last"
                      : item === "AC" || item === "+/-" || item === "%"
                      ? "calculatorGray calculator-Last"
                      : "calculatorDark calculator-First"
                  }
                  onClick={() => {
                    if (typeof item === "string") {
                      if (item === "=") {
                        handleCalculate();
                      } else if (item === "AC") {
                        handleClear();
                      } else {
                        handleButtonClick(item);
                      }
                    } else {
                      handleButtonClick(item.toString());
                    }
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="calculator-Title">
          <div className="calculator-innerDivTitle">
            <h1>CALCULATOR</h1>
            <h3> See more </h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
