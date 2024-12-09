import styled from 'styled-components';
import { ratingUtil } from '@utils';
import ApplyModal from './ApplyModal';
import { useContent } from '../../../hook/useDetail';
import { useNavigate } from 'react-router-dom';

const Content = ({ id }) => {
  const {
    isApplyModalOpen,
    Info,
    handleApplyClick,
    handleCloseApplyModal,
    userRole,
    isDib,
    postDib,
  } = useContent({ id });
  const navigate = useNavigate();
  if (!Info.name) {
    return <S.ErrorContent> 데이터를 읽어오는 중입니다 🤧...</S.ErrorContent>;
  }
  return (
    <>
      <S.TopContainer>
        <S.HeaderItem>
          <S.Title>{Info.name}</S.Title>
          {userRole === 'ADMIN' && (
            <button onClick={() => navigate('/mypage/staff')}>
              수정하기 ✍🏻
            </button>
          )}
        </S.HeaderItem>
        <S.HeaderItem>
          <S.RateBox>
            <img src={ratingUtil(Info.rating)} />
            {isNaN(Info.rating) ? (
              <p>아직 평점이 존재하지 않습니다! 🤫</p>
            ) : (
              <p>{`평균 ${parseFloat(Info.rating).toFixed(1)}점`}</p>
            )}
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
        {userRole === 'USER' && (
          <>
            <button className="applyBtn" onClick={handleApplyClick}>
              지원하기
            </button>
            {userRole !== '' && (
              <button
                className={`${isDib ? `isDib` : `notDib`}`}
                onClick={postDib}
              >
                찜하기
              </button>
            )}
          </>
        )}
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

    & button {
      padding: 0 10px 15px 0;
    }

    & button:hover {
      text-decoration: underline;
    }
  `,

  ChipContainer: styled.span`
    gap: 15px;
    display: flex;
    height: 35px;
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

    & img {
      width: 116px;
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

    & .notDib {
      border: 1px solid ${({ theme }) => theme.colors.grey3};
      color: ${({ theme }) => theme.colors.grey3};
    }

    & .isDib {
      border: 1px solid ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.blue};
      background-color: #e8f6fc;
    }
  `,
};
