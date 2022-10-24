
import { ButtonContainerOP } from './styles';

const ButtonOP = ({label, onClick}) => {
    return (
      <ButtonContainerOP onClick={onClick} type="button">
       {label}
      </ButtonContainerOP>
    );
  }
  
  export default ButtonOP;