
import Input from './components/Input/Input.js';
import Button from './components/Button/Button.js';

import { Container, Linha } from './styles';
import { useState } from 'react';


const App = () => {
  const [valorAtual, setValorAtual] = useState('0');
  const [primeiroValor, setPrimeiroValor] = useState('0');
  const [operacao, setOperacao] = useState('');

  const limpar = () => {
    setValorAtual('0')
    setPrimeiroValor('0')
    setOperacao('')
  };

  const adicionarNumero = (num) => {
    setValorAtual(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const somar = () => {
    if (primeiroValor === '0') {
      setPrimeiroValor(String(valorAtual));
      setValorAtual('0')
      setOperacao('+')
    } else {
      const sum = Number(primeiroValor) + Number(valorAtual);
      setValorAtual(String(sum))
      setOperacao('')
    }

  }

  const subtrair = () => {
    if (primeiroValor === '0') {
      setPrimeiroValor(String(valorAtual));
      setValorAtual('0')
      setOperacao('-')
    } else {
      const sum = Number(primeiroValor) - Number(valorAtual);
      setValorAtual(String(sum))
      setOperacao('')
    }

  }

  const dividir = () => {
    if (primeiroValor === '0') {
      setPrimeiroValor(String(valorAtual));
      setValorAtual('0')
      setOperacao('/')
    } else {
      const sum = Number(primeiroValor) / Number(valorAtual);
      setValorAtual(String(sum))
      setOperacao('')
    }
  }

  const multiplicar = () => {
    if (primeiroValor === '0') {
      setPrimeiroValor(String(valorAtual));
      setValorAtual('0')
      setOperacao('x')
    } else {
      const sum = Number(primeiroValor) * Number(valorAtual);
      setValorAtual(String(sum))
      setOperacao('')
    }
  }

  const igual = () => {

    if (primeiroValor !== '0' && operacao !== '' && valorAtual !== '0') {
      switch (operacao) {
        case '+':
          somar()
          break;
        case '-':
          subtrair();
          break;
        case '/':
          dividir()
          break;
        case 'x':
          multiplicar();
          break;
        default:
          break;
      }
    }

  }

  return (
    <Container>
      <Input value={valorAtual} />
      <Linha>
        <Button label="x" onClick={multiplicar} />
        <Button label="/" onClick={dividir} />
        <Button label="c" onClick={limpar} />
        <Button label="." />
      </Linha>
      <Linha>
        <Button label="7" onClick={() => adicionarNumero('7')} />
        <Button label="8" onClick={() => adicionarNumero('8')} />
        <Button label="9" onClick={() => adicionarNumero('9')} />
        <Button label="-" onClick={subtrair} />
      </Linha>
      <Linha>
        <Button label="4" onClick={() => adicionarNumero('4')} />
        <Button label="5" onClick={() => adicionarNumero('5')} />
        <Button label="6" onClick={() => adicionarNumero('6')} />
        <Button label="+" onClick={somar} />
      </Linha>
      <Linha>
        <Button label="1" onClick={() => adicionarNumero('1')} />
        <Button label="2" onClick={() => adicionarNumero('2')} />
        <Button label="3" onClick={() => adicionarNumero('3')} />
        <Button label="=" onClick={igual} />
      </Linha>
    </Container>
  );
}

export default App;

