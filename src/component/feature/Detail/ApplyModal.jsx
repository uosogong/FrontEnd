import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ApplyModal = ({ isOpen, close }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.Wrapper>
      <S.ModalContent>
        <S.CloseWrap>
          <S.CloseBtn onClick={close}>X</S.CloseBtn>
        </S.CloseWrap>
        <S.Title>직체 / 근로 선택</S.Title>
        <S.Description>지원하실 근무 유형을 선택해주세요!</S.Description>
        <S.ButtonWrap>
          <S.BtnType1
            onClick={() => alert('직체 선택됨')}
            style={{ width: 120 }}
          >
            직체
          </S.BtnType1>
          <S.BtnType2
            onClick={() => alert('근로 선택됨')}
            style={{ width: 120 }}
          >
            근로
          </S.BtnType2>
        </S.ButtonWrap>
      </S.ModalContent>
    </S.Wrapper>,
    document.getElementById('root'),
  );
};

export default ApplyModal;

const S = {
  Wrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
  `,

  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 0.5rem 2rem 6rem 2rem;
    border-radius: 8px;
    width: 40%;
    height: auto;
    max-height: 60%;
    text-align: center;
    gap: 2rem;
    overflow-y: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  `,

  Title: styled.h1`
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,

  Description: styled.p`
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,

  ButtonWrap: styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
  `,
  CloseWrap: styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
  `,

  BtnType1: styled.button`
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: 7px;
  `,

  BtnType2: styled.button`
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
    padding: 7px;
  `,

  CloseBtn: styled.button`
    font-size: 20px;
  `,
};
