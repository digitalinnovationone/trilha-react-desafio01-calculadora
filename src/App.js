
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';
import ButtonK from './components/Button/DEL';
import ButtonOP from './components/Button/OP';
import ButtonZ from './components/Button/Z';




const App = () => {
  const [calculator, setCalculator] = useState({
    firstNumber: '0',
    secondNumber: '0',
    operation: '',
    result: null
  });

  const handleOnClear = () => {

    setCalculator({
      firstNumber: '0',
      secondNumber: '0',
      operation: '',
      result: null
    })

    console.log(calculator)
  };

  const handleChange = (param, value) => {

    if ((param === 'firstNumber' || param === 'secondNumber')
      && calculator[`${param}`] !== '0') {



      setCalculator({
        ...calculator,
        [`${param}`]: `${calculator[`${param}`]}${value}`,
      });


    } else {


      if (calculator.result !== null) {

        console.log("calculator")
        console.log(calculator)

        setCalculator({
          firstNumber: calculator.result,
          secondNumber: '0',
          [`${param}`]: value,
          result: null
        })
      } else {
        setCalculator({
          ...calculator,
          [`${param}`]: value,
        });
      }



    }

    console.log(calculator)
  };





  const handleEquals = (signal) => {

    try {
      if (signal === '-') {
        handleChange("result", `${Number(calculator.firstNumber) - Number(calculator.secondNumber)}`)
      } else if (signal === '+') {
        handleChange("result", `${Number(calculator.firstNumber) + Number(calculator.secondNumber)}`)
      } else if (signal === 'x') {
        handleChange("result", `${Number(calculator.firstNumber) * Number(calculator.secondNumber)}`)
      } else {
        handleChange("result", `${Number(calculator.firstNumber) / Number(calculator.secondNumber)}`)
      }
    } catch (error) {
      handleChange("result", `${error}`)

    }


  }

  return (
    <Container>
      <Content>
        <Input value={calculator.result !== null && calculator.firstNumber !== '0' ?
          `${calculator.firstNumber} ${calculator.operation} ${calculator.secondNumber} = ${calculator.result}`
          : calculator.secondNumber !== '0' ? calculator.secondNumber
            : calculator.firstNumber} />
        <Row>
          <ButtonOP label="x" onClick={calculator.firstNumber !== '0' ? () => handleChange("operation", "x") : () => { }} />
          <ButtonOP label="/" onClick={calculator.firstNumber !== '0' ? () => handleChange("operation", "/") : () => { }} />
          <ButtonK label="CE" onClick={() => handleOnClear()} />
          <Button label="." onClick={calculator.result !== null ? () => {
            setCalculator({
              firstNumber: `${calculator.result}.`,
              secondNumber: '0',
              operation: '',
              result: null
            })
          } : calculator.operation === '' ? () => handleChange("firstNumber", `.`) : () => handleChange("secondNumber", `.`)} />
        </Row>
        <Row>
          <Button label="7" onClick={calculator.operation === '' ? () => handleChange("firstNumber", "7") : () => handleChange("secondNumber", "7")} />
          <Button label="8" onClick={calculator.operation === '' ? () => handleChange("firstNumber", "8") : () => handleChange("secondNumber", "8")} />
          <Button label="9" onClick={calculator.operation === '' ? () => handleChange("firstNumber", "9") : () => handleChange("secondNumber", "9")} />
          <ButtonOP label="-" onClick={calculator.firstNumber !== '0' ? () => handleChange("operation", "-") : () => { }} />
        </Row>
        <Row>
          <Button label="4" onClick={calculator.operation === '' ? () => handleChange("firstNumber", "4") : () => handleChange("secondNumber", "4")} />
          <Button label="5" onClick={calculator.operation === '' ? () => handleChange("firstNumber", "5") : () => handleChange("secondNumber", "5")} />
          <Button label="6" onClick={calculator.operation === '' ? () => handleChange("firstNumber", "6") : () => handleChange("secondNumber", "6")} />
          <ButtonOP label="+" onClick={calculator.firstNumber !== '0' ? () => handleChange("operation", "+") : () => { }} />
        </Row>
        <Row>
          <Button label="1" onClick={calculator.operation === '' ? () => handleChange("firstNumber", "1") : () => handleChange("secondNumber", "1")} />
          <Button label="2" onClick={calculator.operation === '' ? () => handleChange("firstNumber", "2") : () => handleChange("secondNumber", "2")} />
          <Button label="3" onClick={calculator.operation === '' ? () => handleChange("firstNumber", "3") : () => handleChange("secondNumber", "3")} />
          <ButtonK label="=" onClick={() => handleEquals(calculator.operation)} />
        </Row>
        <ButtonZ label="0" onClick={calculator.operation === '' ? () => handleChange("firstNumber", "0") : () => handleChange("secondNumber", "0")} />

      </Content>
    </Container>
  );
}

export default App;
