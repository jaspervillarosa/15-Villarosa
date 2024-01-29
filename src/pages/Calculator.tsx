import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';



export default function calculator() {

    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);

    const handleButtonClick = (value: string) => {
        setInput((prevInput) => prevInput + value);
    };
    
    const handleCalculate = () => {
        try {
            setResult(eval(input));
        }catch (error){
            setResult(null)
        }
    };

    const handleClear = () => {

        setInput('');
        setResult(null);
    };

  return (
    <div className='calculator-Main'>
        <div className='calculator-Title'>
                <h1>
                    CALCULATOR
                </h1>
        </div>

        <div>
            <InputGroup className="mb-3">
            <Form.Control type="text" value={result !== null ? result : 0 || input} readOnly aria-label="Result" />
            </InputGroup>
         </div>

        <div>
        <Button variant='dark' onClick={handleClear}>C</Button>
        <Button variant="dark" onClick={handleClear}>+/-</Button>
        {[ '%','/', 7, 8, 9, '*',4, 5, 6,'-', 1, 2, 3, '+', 0, '.'].map((item) => (
          <Button key={item} variant={typeof item === 'number' ? 'secondary': item == '%' ? 'dark' : 'warning' } onClick={() => handleButtonClick(item.toString())}>
            {item}
          </Button>
        ))}
        <Button variant="warning" onClick={handleCalculate}>=</Button>
      </div>

    </div>


    
  )
}
