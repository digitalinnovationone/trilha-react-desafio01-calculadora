
import { InputContainer } from './styles';

const Input = ({value, operation}) => {
    return (
      <InputContainer>
        <span>{operation}</span>
       {value}
      </InputContainer>
    );
  }
  
  export default Input;