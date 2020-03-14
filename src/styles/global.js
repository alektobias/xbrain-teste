import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
      @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    *:focus {
        outline: 0;
    }
    html, body, #root {
        height: 100%;
        font-family: 'Roboto', sans-serif;
        background: ${props => props.theme.colors.background}
    }
    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font-family: 'Roboto', sans-serif
    }
    a {
       text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`;
