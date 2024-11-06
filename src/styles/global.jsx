import { css } from 'styled-components';
import Reset from './reset';

const global = css`
  ${Reset},

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 62.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }
`;

export default global;
