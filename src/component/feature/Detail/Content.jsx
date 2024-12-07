import styled from 'styled-components';
import { ratingUtil } from '@utils';
import ApplyModal from './ApplyModal';
import { useContent } from '../../../hook/useDetail';

const Content = ({ id }) => {
  const { isApplyModalOpen, Info, handleApplyClick, handleCloseApplyModal } =
    useContent({ id });
  if (!Info.name) {
    return <S.ErrorContent> 데이터를 읽어올 수 없습니다 🤧...</S.ErrorContent>;
  }
  return (
    <>
      <S.TopContainer>
        <S.HeaderItem>
          <S.Title>{Info.name}</S.Title>
          <button>수정하기</button>
        </S.HeaderItem>
        <S.HeaderItem>
          <S.RateBox>
            <img src={ratingUtil(4.08)} />
            <p>{`평균 ${Info.rating}점`}</p>
          </S.RateBox>
          <S.ChipContainer>
            <S.Chip
              $isActive={Info.internRecruitment || Info.scholarshipRecruitment}
            >
              모집중
            </S.Chip>
            <S.Chip $isActive={Info.internRecruitment}>직장형 체험인턴</S.Chip>
            <S.Chip $isActive={Info.scholarshipRecruitment}>근로</S.Chip>
          </S.ChipContainer>
        </S.HeaderItem>
      </S.TopContainer>
      <S.ContentBox>
        <pre>{Info.introduction}</pre>
      </S.ContentBox>
      <S.ButtonBox>
        <button className="applyBtn" onClick={handleApplyClick}>
          지원하기
        </button>
        <button className="likeBtn">찜하기</button>
      </S.ButtonBox>
      {isApplyModalOpen && (
        <ApplyModal isOpen={isApplyModalOpen} close={handleCloseApplyModal} />
      )}
    </>
  );
};

export default Content;

const S = {
  ErrorContent: styled.div`
    margin: 10rem;
    font-size: 20px;
    font-weight: 300;
  `,

  TopContainer: styled.div`
    font-family: inherit;
    width: 80%;
  `,

  Title: styled.h1`
    font-family: Inter;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${({ theme }) => theme.colors.blue};
  `,

  HeaderItem: styled.div`
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

    background-color: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.blue : theme.colors.grey2};
    color: ${({ theme }) => theme.colors.white};
  `,

  ContentBox: styled.section`
    width: 80%;

    & pre {
      font-family: inherit;
      font-size: 16px;
      line-height: 1.6;
    }
  `,

  RateBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    & p {
      color: ${({ theme }) => theme.colors.grey2};
      font-family: Inter;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  `,

  ButtonBox: styled.div`
    width: 80%;

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
