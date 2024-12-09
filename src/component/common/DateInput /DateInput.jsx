import { forwardRef } from 'react';
import S from './DateInput.style';

const DateInput = forwardRef((props, ref) => {
  return <S.Input ref={ref} type="date" {...props} max={'9999-12-31'} />;
});

export default DateInput;
