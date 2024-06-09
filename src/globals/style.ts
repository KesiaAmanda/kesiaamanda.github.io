import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Minecraftia Regular', sans-serif;
    color: black;
    font-size: 12px;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
  
  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
  }
    
  p {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle;