import styled from 'styled-components';
import rate4 from '@assets/icon/rating4.svg';
import { CONTENT } from '../../../constants/mocks/detailContent';

const Content = () => {
  return (
    <>
      <S.TopContainer>
        <S.Title>공과대학 컴퓨터과학부</S.Title>
        <S.StateBar>
          <span>
            <img src={rate4} />
            <p>평균 4.08점</p>
          </span>
          <S.ChipContainer>
            <S.Chip>모집중</S.Chip>
            <S.Chip>직장형 체험인턴</S.Chip>
            <S.Chip>근로</S.Chip>
          </S.ChipContainer>
        </S.StateBar>
      </S.TopContainer>
      <S.ContentBox>
        <pre>{CONTENT.data}</pre>
      </S.ContentBox>
      <S.ButtonBox>
        <button className="applyBtn">지원하기</button>
        <button className="likeBtn">찜하기</button>
      </S.ButtonBox>
    </>
  );
};

export default Content;

const S = {
  TopContainer: styled.div`
    width: 70%;
  `,

  Title: styled.h1`
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${({ theme }) => theme.colors.blue};
  `,

  StateBar: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,

  ChipContainer: styled.span`
    gap: 15px;
    display: flex;
    height: 30px;
  `,

  Chip: styled.span`
    display: flex;
    padding: 1px 25px;
    align-items: center;
    border-radius: 20px;
    line-height: 5px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  `,

  ContentBox: styled.section`
    width: 70%;
  `,

  ButtonBox: styled.div`
    width: 70%;

    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding-bottom: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};

    & button {
      display: flex;
      padding: 8px 40px;
      border-radius: 20px;
      text-align: center;
      color: ${({ theme }) => theme.colors.white};

      text-align: center;
      font-family: SUIT;
      font-size: 20px;
      font-style: normal;
    }

    & .applyBtn {
      background-color: ${({ theme }) => theme.colors.blue};
    }

    & .likeBtn {
      background-color: ${({ theme }) => theme.colors.grey2};
    }
  `,
};
