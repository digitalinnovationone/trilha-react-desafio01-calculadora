
import { ButtonContainerDEL } from './styles';

const ButtonK = ({label, onClick}) => {
    return (
      <ButtonContainerDEL onClick={onClick} type="button">
       {label}
      </ButtonContainerDEL>
    );
  }
  
  export default ButtonK;