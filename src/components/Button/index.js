import { ButtonContainer } from './style';


const Button = ({ label, onClick, classe }) => {
    return (
      <ButtonContainer class={classe} onClick={onClick}>
      {label}
      </ButtonContainer>
    );
  }

  export default Button;
  