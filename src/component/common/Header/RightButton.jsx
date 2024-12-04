import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import styled from 'styled-components';

const RightButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  //isLoggedIn 추후에 변경
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const NoneAuthButtonComponent = () => {
    return (
      <S.ButtonWrapper>
        <button onClick={() => navigate('./login')}>
          <p style={{ fontSize: 16, color: theme.colors.grey3 }}>로그인</p>
        </button>
        <div style={{ width: 1, height: 12, background: theme.colors.grey3 }} />
        <button onClick={() => navigate('./signup')}>
          <p style={{ fontSize: 16, color: theme.colors.grey3 }}>회원가입</p>
        </button>
      </S.ButtonWrapper>
    );
  };

  const AuthButtonComponent = () => {
    return (
      location.pathname !== '/mypage' && (
        <S.ButtonWrapper>
          <button onClick={() => navigate('./mypage')}>
            <p style={{ fontSize: 16, color: theme.colors.grey3 }}>
              마이페이지
            </p>
          </button>
        </S.ButtonWrapper>
      )
    );
  };

  return isLoggedIn ? <AuthButtonComponent /> : <NoneAuthButtonComponent />;
};

const S = {
  ButtonWrapper: styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
  `,
};

export default RightButton;
