import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteFetcher } from '../../../api/method';
import { useAtom } from 'jotai';
import { tokenAtom } from '../../../store/tokenAtom';

const WithdrawModal = ({ isOpen, close }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();
  const [accessToken, setaccessToken] = useAtom(tokenAtom);

  const handlewithdraw = async (e) => {
    e.preventDefault();
    try {
      await deleteFetcher('/users');
      localStorage.removeItem('userInfo');
      setaccessToken({ token: '', role: '' });
      navigate('/');
    } catch (error) {
      console.log(error.status);
      if (error.status === 400) {
        setJoinState('회원탈퇴에 실패했습니다 🤨');
      }
    }
  };

  const handleContinuetoUse = () => {
    navigate('/');
    close();
  };

  return ReactDOM.createPortal(
    <S.Wrapper>
      <S.ModalContent>
        <S.CloseWrap>
          <S.CloseBtn onClick={close}>X</S.CloseBtn>
        </S.CloseWrap>
        <S.Title>정말 탈퇴하시겠어요?</S.Title>
        <S.Description>
          회원 탈퇴 시<br /> 계정은 삭제되며
          <br /> 복구되지 않습니다.
        </S.Description>
        <S.ButtonWrap>
          <S.BtnType1 onClick={handleContinuetoUse} style={{ width: 120 }}>
            더 써볼래요
          </S.BtnType1>
          <S.BtnType2 onClick={handlewithdraw} style={{ width: 120 }}>
            떠날래요
          </S.BtnType2>
        </S.ButtonWrap>
      </S.ModalContent>
    </S.Wrapper>,
    document.getElementById('root'),
  );
};

export default WithdrawModal;

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
    padding: 1.5rem 2rem 6rem 2rem;
    border-radius: 8px;
    width: 35%;
    height: auto;
    max-height: 70%;
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
    border: 1px solid ${({ theme }) => theme.colors.error};
    background-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.white};
    padding: 7px;
  `,

  BtnType2: styled.button`
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.error};
    padding: 7px;
  `,

  CloseBtn: styled.button`
    font-size: 20px;
  `,
};
