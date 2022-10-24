import styled from 'styled-components';

const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    
    &:hover {
        opacity: 0.6;
    }
`
const ButtonContainerDEL = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: red;
    color: white;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    
    &:hover {
        opacity: 0.6;
    }
`
const ButtonContainerOP = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: yellow;
    color: black;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    
    &:hover {
        opacity: 0.6;
    }
`
export {ButtonContainer, ButtonContainerDEL, ButtonContainerOP}