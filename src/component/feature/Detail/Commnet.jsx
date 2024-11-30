import styled from 'styled-components';
import { COMMENT } from '../../../constants/mocks/detailComment';
import profile from '../../../assets/images/profile.svg';
import rate4 from '../../../assets/icon/rating4.svg';

const Comment = () => {
  const count = COMMENT.length;
  return (
    <S.Wrapper>
      <div>
        <h1>{`${count}개의 후기`}</h1>
      </div>
      <div>
        {COMMENT.map((e) => (
          <S.CommentWrapper key={e.id}>
            <img src={profile} />
            <div>
              <div>
                <span>{e.name}</span>
                <span>{e.date}</span>
              </div>
              <div>
                <span>
                  <label>{e.work}</label>
                  <label>{e.mood}</label>
                </span>
                <img src={rate4} />
              </div>
              <div>{e.content}</div>
            </div>
          </S.CommentWrapper>
        ))}
      </div>
      <div></div>
    </S.Wrapper>
  );
};

export default Comment;

const S = {
  Wrapper: styled.section`
    width: 70%;
    display: flex;
    flex-direction: column;
  `,

  CommentWrapper: styled.div`
    display: flex;
    width: 100%;
  `,
};
