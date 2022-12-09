
import { ButtonContainer } from './styles';

const Button = ({label, onClick, operator}) => {
    return (
      <ButtonContainer onClick={onClick} type="button" operator={operator}>
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;