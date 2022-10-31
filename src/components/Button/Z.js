
import { ButtonContainerZ } from './styles';

const ButtonZ = ({label, onClick}) => {
    return (
      <ButtonContainerZ onClick={onClick} type="button">
       {label}
      </ButtonContainerZ>
    );
  }
  
  export default ButtonZ;