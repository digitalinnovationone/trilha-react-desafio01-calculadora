import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const[firstNumber, setFirstNumber] = useState('0');
  const[operarion, setOperation] = useState('0');

  const handleAddNumber = (num) => {

   console.log(currentNumber);
  
    setCurrentNumber(prev => `${prev === '0'?'':prev}${num}`)
    
  }

  const handleSumNumbers = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
   } else{
    const n = Number(firstNumber) + Number(currentNumber)
    setCurrentNumber(String(n))
    setFirstNumber('0');
    setOperation('');
   }
  }
  
  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
   } else{
    const n = Number(firstNumber) - Number(currentNumber)
    setCurrentNumber(String(n))
    setFirstNumber('0');
    setOperation('');
   }
  }

  const handleXNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
   } else{
    const n = Number(firstNumber) * Number(currentNumber)
    setCurrentNumber(String(n))
    setFirstNumber('0');
    setOperation('');
   }
  }

  const handleDivNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
   } else{
    const n = Number(firstNumber) / Number(currentNumber)
    setCurrentNumber(String(n))
    setFirstNumber('0');
    setOperation('');
   }
  }

  const handleEquals = () => {


    if(firstNumber !== '0' && operarion!=='' && currentNumber !== ''){
      switch(operarion){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
          case '*':
          handleXNumbers();
          break;
          case '/':
          handleDivNumbers();
          break;
          default:
            break;
      }

   } 
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    // currentNumber = 0;
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
        <Button label="X" onClick={handleXNumbers}/>
        <Button label="/" onClick={handleDivNumbers}/>
        <Button label="C" onClick={handleOnClear}/>
        <Button label="=" onClick={handleEquals} />
        </Row>  
        <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="+" onClick={handleSumNumbers}/>
        </Row> 
        <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>  
      </Content>
    </Container>
  );
}

export default App;
