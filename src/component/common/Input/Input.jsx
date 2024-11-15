import { forwardRef } from 'react';
import S from './Input.style';

const Input = forwardRef((props, ref) => {
  return <S.Input ref={ref} {...props} />;
});

export default Input;
