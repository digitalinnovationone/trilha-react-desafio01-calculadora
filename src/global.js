import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * body{
    margin: 0;
    padding: 0;
    background-color: blue;
    color: ${props => (props.darkMode ? 'white' : 'black')};
  }
`