import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useMatch } from 'react-router-dom';
import { useTheme } from 'styled-components';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { tokenAtom } from '../../../store/tokenAtom';

const RightButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const match = useMatch('/mypage/*');

  const [accessToken, setaccessToken] = useAtom(tokenAtom);

  useEffect(() => {
    const Info = JSON.parse(localStorage.getItem('userInfo')) || [];
    if (Info.token) {
      setaccessToken(Info);
    }
  }, [setaccessToken]);

  const NoneAuthButtonComponent = () => {
    return (
      <S.ButtonWrapper>
        <button onClick={() => navigate('/login')}>
          <p style={{ fontSize: 16, color: theme.colors.grey3 }}>로그인</p>
        </button>
        <div style={{ width: 1, height: 12, background: theme.colors.grey3 }} />
        <button onClick={() => navigate('/signup')}>
          <p style={{ fontSize: 16, color: theme.colors.grey3 }}>회원가입</p>
        </button>
      </S.ButtonWrapper>
    );
  };

  const AuthButtonComponent = () => {
    return (
      <S.ButtonWrapper>
        {!match && (
          <button onClick={() => navigate('/mypage')}>
            <p style={{ fontSize: 16, color: theme.colors.grey3 }}>
              마이페이지
            </p>
          </button>
        )}
        <div style={{ width: 1, height: 12, background: theme.colors.grey3 }} />
        <button onClick={() => handleLogout()}>
          <p style={{ fontSize: 16, color: theme.colors.grey3 }}>로그아웃</p>
        </button>
      </S.ButtonWrapper>
    );
  };
  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setaccessToken({ token: '', role: '', name: '' });
    navigate('/login');
  };

  return accessToken.token ? (
    <AuthButtonComponent />
  ) : (
    <NoneAuthButtonComponent />
  );
};

const S = {
  ButtonWrapper: styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
  `,
};

export default RightButton;
