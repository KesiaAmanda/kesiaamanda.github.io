import { createGlobalStyle } from 'styled-components';
import reziseIcon from '../assets/icons/window/resize.png'
import minecraftia from '../fonts/Minecraftia-Regular.ttf'


export const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: 'Minecraftia';
      src: url(${minecraftia}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }

  * {
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

  ::-webkit-scrollbar {
    width: 20px;
    height: 20px;
  }

  ::-webkit-scrollbar-button {
    display: block;
    min-width: 20px;
    min-height: 20px;
    background-color: ${({ theme }) => theme.window.body.background.color};
    border-top: ridge 2px ${({ theme }) => theme.frame.shadow.white};
    border-left: ridge 2px ${({ theme }) => theme.frame.shadow.white};
    border-bottom: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-right: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    background-position: center;
    background-repeat: no-repeat;
  }

  ::-webkit-scrollbar-button:vertical:start:increment,
  ::-webkit-scrollbar-button:vertical:end:decrement,
  ::-webkit-scrollbar-button:horizontal:start:increment,
  ::-webkit-scrollbar-button:horizontal:end:decrement {
    display: none;
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({ theme }) => theme.images.scroll.vertical.enabled.increment};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({ theme }) => theme.images.scroll.vertical.enabled.decrement};
  }

  ::-webkit-scrollbar-button:vertical:increment:disabled {
    background-image: ${({ theme }) => theme.images.scroll.vertical.disabled.increment};
  }

  ::-webkit-scrollbar-button:vertical:decrement:disabled {
    background-image: ${({ theme }) => theme.images.scroll.vertical.disabled.decrement};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({ theme }) => theme.images.scroll.horizontal.enabled.increment};
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({ theme }) => theme.images.scroll.horizontal.enabled.decrement};
  }

  ::-webkit-scrollbar-button:horizontal:increment:disabled {
    background-image: ${({ theme }) => theme.images.scroll.horizontal.disabled.increment};
  }

  ::-webkit-scrollbar-button:horizontal:decrement:disabled {
    background-image: ${({ theme }) => theme.images.scroll.horizontal.disabled.decrement};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.window.body.background.color};
    border-top: ridge 2px ${({ theme }) => theme.frame.shadow.white};
    border-left: ridge 2px ${({ theme }) => theme.frame.shadow.white};
    border-bottom: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
    border-right: ${({ theme }) => theme.frame.border.style} 2px ${({ theme }) => theme.frame.shadow.black};
  }

  ::-webkit-scrollbar-track-piece {
    background-color: ${({ theme }) => theme.window.scroll.background};
  }

  ::-webkit-resizer {
    background: ${({ theme }) => theme.window.scroll.background};
    background-image: url(${reziseIcon});
  }
`

export default GlobalStyle;