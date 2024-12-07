import Header from '@component/common/Header';
import MainBanner from '@assets/images/main-banner.png';
import Board from '@component/feature/Board';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <Header />
      <S.ContentWrapper>
        <img src={MainBanner} alt="배너" width={1280} height={551} />
        <Board />
      </S.ContentWrapper>
    </>
  );
};
export default Main;

const S = {
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};
