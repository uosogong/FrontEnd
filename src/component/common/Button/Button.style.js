import styled from 'styled-components';

const S = {
  button: styled.button`
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
  `,
};

export default S;
