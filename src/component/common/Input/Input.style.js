import styled from 'styled-components';

const S = {
  Input: styled.input`
    width: 100%;
    height: 3rem;
    padding: 0.5rem 1.5rem;
    border: 1px solid ${(props) => props.theme.colors.blue};
    border-radius: 2rem;
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.grey2};
    }
  `,
};

export default S;
