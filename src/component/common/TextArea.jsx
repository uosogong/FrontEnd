import styled from 'styled-components';
import { forwardRef } from 'react';

const TextArea = forwardRef((props, ref) => {
  return <S.TextArea ref={ref} {...props} />;
});

export default TextArea;

const S = {
  TextArea: styled.textarea`
    width: 100%;
    padding: 0.5rem 1.5rem;
    height: 7rem;
    border: 1px solid ${(props) => props.theme.colors.blue};
    border-radius: 2rem;
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.grey2};
    }
  `,
};
