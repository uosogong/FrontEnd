import { forwardRef } from 'react';
import S from './DateInput.style';

const DateInput = forwardRef((props, ref) => {
  return (
    <S.Input
      type="date"
      ref={ref}
      {...props}
      required
      pattern="\d{4}-\d{2}-\d{2}"
      max="9999-12-31"
    />
  );
});

export default DateInput;
