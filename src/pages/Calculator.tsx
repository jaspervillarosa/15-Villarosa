import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Container } from 'react-bootstrap';



export default function calculator() {

    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);

    const handleButtonClick = (value: string | number ) => {
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
    <Container className='calculator-Main vw-100'>
        <div className='calcualtor-innerMain'>
        <div className='calculator-Title'>
                <h1>
                    CALCULATOR
                </h1>
        </div>

        <div className='calculator-Input'>
            <InputGroup className="mb-3">
            <Form.Control className='calculator-textRight' type="text" value={result !== null ? result : 0 || input} readOnly aria-label="Result" />
            </InputGroup>
         </div>

        <div className='calculator-Numbers'>
        <div className="calculator-buttonNumber">
            {[ 'C', '+/-','%','/', 7, 8, 9, '*',4, 5, 6,'-', 1, 2, 3, '+', 0, '.', '='].map((item, index) => (
            <Button key={item} className={index % 4 === 3 ? 'calculator-Last' : 'calculator-First'} 
            
            variant={
                typeof item === 'number' ? 'secondary': 
                item == '/' || item === '*' || item === '+' || item === '-' || item == '.' || item == '=' ? 'warning' : 'dark' 
                } 
            
            onClick={() => {
                        if (typeof item === 'string'){
                            if (item === '='){
                                handleCalculate();
                            }else if (item === 'C'){
                                handleClear();
                            }else{
                                handleButtonClick(item)
                            }
                        }else {
                            handleButtonClick(item.toString())
                        }
                    }
                    }>
                {item}
            </Button>
        ))}
        </div>
      </div>
        </div>

    </Container>


    
  )
}
