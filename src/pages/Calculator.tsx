
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Container, Nav } from 'react-bootstrap';
import Footer from '../components/Footer';

export default function Calculator() {
  const [input, setInput] = useState<string>('');
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
    setInput('');
    setResult(null);
  };

  return (
    <div className='calculator-Main'>
      <div className='hobby-Innermain'>
      <Nav className='hobby-Nav'
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Button className='hobby-Calculator' href="/Calculator"><del>calculator</del></Button>
            </Nav.Item>
            <Nav.Item>
                <Button className='hobby-JSON' href='/JSON'>JSON</Button>
            </Nav.Item>
        </Nav>
      </div>
    <div className='calcualtor-innerMain'>
    <div className='calculator-Title'>
            <h1>
             CALCULATOR
            </h1>
        </div>
      <div className='calculator-Input'>
        <div className='calculator-Input'>
          <Form.Control
            type='text'
            value={result !== null ? result : 0 || input}
            readOnly
            aria-label='Result'
            className='calculator-inputContent' // Align input text to the right
          />
        </div>
      </div>

      <div className='calculator-Numbers'>
        <div className='calculator-buttonNumber'>
          {[ 'AC', '+/-','%','÷', 7, 8, 9, '*',4, 5, 6,'-', 1, 2, 3, '+','', 0, '.', '='].map(
            (item, index) => (
              <button
                key={item}
                className={
                item === '÷' || item === '*' || item === '-' || item === '+' || item === '=' && index % 4 === 3 ? 'calculator-Secondary calculator-Last': 
                item === 'AC' || item === '+/-' || item === '%' ? 'calculatorGray calculator-Last' : 'calculatorDark calculator-First' 
                } 
                onClick={() => {
                  if (typeof item === 'string') {
                    if (item === '=') {
                      handleCalculate();
                    } else if (item === 'AC') {
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
            )
          )}
        </div>
      </div>
    </div>
        
      <Footer/>
    </div>
  );
}
