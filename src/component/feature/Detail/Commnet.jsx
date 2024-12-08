import styled from 'styled-components';
import profile from '@assets/images/profile.svg';
import { ratingUtil } from '@utils';
import { useCommnent } from '../../../hook/useDetail';
import { useNavigate } from 'react-router-dom';
const Comment = ({ id }) => {
  const navigate = useNavigate();
  const { dropdown, feedbackList, filteredFeedbackList, moodState, busyState } =
    useCommnent({ id });
  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <S.Title>{`${feedbackList.length}개의 후기`}</S.Title>
          {dropdown.render()}
        </div>

        <S.CommmentBtn onClick={() => navigate('review')}>
          후기 남기기
        </S.CommmentBtn>
      </S.Header>
      <S.CommentsWrapper>
        {filteredFeedbackList.map((feedback, i) => (
          <S.CommentWrapper key={feedback.i}>
            <img src={profile} />
            <div>
              <S.CommentBox>
                <span className="name">{`익명의 시대평 ${i + 1}`}</span>
                <span className="date">{feedback.date}</span>
              </S.CommentBox>
              <S.CommentBox>
                <S.ChipContainer>
                  <S.Chip>{busyState(feedback.busy)}</S.Chip>
                  <S.Chip>{moodState(feedback.mood)}</S.Chip>
                </S.ChipContainer>
                <img src={ratingUtil(feedback.rating)} alt="rate" />
              </S.CommentBox>
              <S.CommentDetail>{feedback.description}</S.CommentDetail>
            </div>
          </S.CommentWrapper>
        ))}
      </S.CommentsWrapper>
    </S.Wrapper>
  );
};

export default Comment;

const S = {
  Wrapper: styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
  `,

  Header: styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    align-items: center;
  `,

  Title: styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 10px;
  `,

  ChipContainer: styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
  `,

  Chip: styled.label`
    border-radius: 20px;
    padding: 5px 17px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    font-family: Inter;
    font-size: 11px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  `,

  CommmentBtn: styled.button`
    color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.blue};

    padding: 5px 25px;
    line-height: 25px;

    text-align: center;
    font-size: 16px;
    font-weight: 400;
  `,

  CommentsWrapper: styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;

    & div {
      width: 100%;
    }
  `,

  CommentWrapper: styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #000;
    gap: 10px;
  `,

  CommentBox: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    & .name {
      color: ${({ theme }) => theme.colors.black};
      font-size: 15px;
      font-weight: 400;
      line-height: 20px;
    }

    & .date {
      color: ${({ theme }) => theme.colors.grey2};
      text-align: right;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
  `,

  CommentDetail: styled.div`
    padding-top: 11px;
  `,
};
