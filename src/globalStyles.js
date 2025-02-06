import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

  body, html {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.backgroundColor};
  }

  body {
    font-family: 'JetBrains Mono', monospace;
  }
`;

export default GlobalStyle;
