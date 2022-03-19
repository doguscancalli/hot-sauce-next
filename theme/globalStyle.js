import { createGlobalStyle } from 'styled-components'
import theme from '@theme'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Chappa';
  src: url('/font/Chappa.ttf') format('truetype');
}

::-webkit-scrollbar {
  width: 0;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



body {
  font-family: ${theme.font.family.body};
  background: ${theme.color.pink};
  color: ${theme.color.white};
  overflow-x: hidden;
}

button {
  background: none;
  outline: none;
  color: ${theme.color.white};
  border: none;
  font-family: ${theme.font.family.body};
  cursor: pointer;
}

input {
  font-family: ${theme.font.family.body};
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  line-height: 1.2;
}
`
export default GlobalStyle
