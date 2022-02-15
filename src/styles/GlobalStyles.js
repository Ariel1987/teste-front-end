import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: sans-serif;
  }

  html {
      font-size: 10;
  }

  body {
      background-color: #f1f1f1;
  }
`
