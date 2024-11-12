import styled from 'styled-components';
import logo from '@assets/images/logo.svg';
import RightButton from './RightButton';

const Header = () => {
  return (
    <S.Wrapper>
      <img src={logo} alt="로고" width={140} height={60} />
      <RightButton />
    </S.Wrapper>
  );
};
export default Header;

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 70px;
    width: 100%;
    padding: 0 22px;

    border-bottom: 1px solid ${(props) => props.theme.colors.grey2};
  `,
};
