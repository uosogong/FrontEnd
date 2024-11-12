import { css } from 'styled-components';
import Reset from './reset';

const global = css`
  ${Reset},

  html,
  body {
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }
`;

export default global;
