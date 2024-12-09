import styled from 'styled-components';

const S = {
  button: styled.button`
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.grey2 : theme.colors.blue};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    color: ${(props) => props.theme.colors.white};
    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
  `,
};

export default S;
