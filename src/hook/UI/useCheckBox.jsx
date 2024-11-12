import styled from 'styled-components';
import { useState } from 'react';
import checkWhite from '@assets/icon/check-white.svg';
import checkBlue from '@assets/icon/check-blue.svg';

const useCheckBox = () => {
  const [isCheck, setIsCheck] = useState(false);

  const toggle = () => setIsCheck((prev) => !prev);

  const render = () => (
    <S.CheckBoxWrapper>
      <S.HiddenCheckBox type="checkbox" checked={isCheck} onClick={toggle} />
      <S.CustomCheckBox checked={isCheck} onClick={toggle}>
        {isCheck ? (
          <img src={checkWhite} alt="check" width={16} height={16} />
        ) : (
          <img src={checkBlue} alt="check" width={16} height={16} />
        )}
      </S.CustomCheckBox>
    </S.CheckBoxWrapper>
  );

  return { render, isCheck, toggle };
};

const S = {
  CheckBoxWrapper: styled.div``,
  HiddenCheckBox: styled.input.attrs((props) => ({
    type: 'checkbox',
    checked: props.checisCheck,
    onClick: props.onClick,
  }))`
    display: none;
    background-color: black;
  `,
  CustomCheckBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;
    border-radius: 4px;
    cursor: pointer;

    background: ${(props) =>
      props.checked ? props.theme.colors.blue : props.theme.colors.white};
    border: 1.5px solid ${(props) => props.theme.colors.blue};
  `,
};

export default useCheckBox;
