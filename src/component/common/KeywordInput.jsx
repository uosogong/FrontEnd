import styled from 'styled-components';
import glass from '@assets/icon/glass.svg';
import { forwardRef } from 'react';
const KeywordInput = forwardRef(({ handleSubmit }, ref) => {
  return (
    <S.InputWrapper onSubmit={handleSubmit}>
      <S.Input
        placeholder="키워드를 입력하세요. (ex. 컴퓨터과학부)"
        ref={ref}
      />
      <img src={glass} alt="돋보기" width={32} height={32} />
    </S.InputWrapper>
  );
});

export default KeywordInput;

const S = {
  InputWrapper: styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 4px 8px;
    width: 680px;
    height: 40px;

    border: 2px solid ${(props) => props.theme.colors.blue};
    border-radius: 20px;
  `,
  Input: styled.input`
    width: 650px;
    border: none;
    outline: none;

    font-size: 16px;
  `,
};
