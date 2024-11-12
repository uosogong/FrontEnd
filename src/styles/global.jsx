import { css } from 'styled-components';
import Reset from './reset';

const global = css`
  ${Reset},
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0 auto;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export default global;
