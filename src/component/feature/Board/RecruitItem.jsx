import styled, { useTheme } from 'styled-components';
import Tag from '../../common/Tag';
import starFilled from '@assets/icon/star-fill.svg';
import starEmpty from '@assets/icon/star-empty.svg';
import likeButtonDefault from '@assets/images/like-button-default.svg';
import likeButtonLike from '@assets/images/like-button-like.svg';
import { useNavigate } from 'react-router-dom';
import { postFetcher } from '../../../api/method';

const RecruitItem = ({ item, setData }) => {
  const handleLikeClick = async () => {
    setData((prevData) =>
      prevData.map((dataItem) =>
        dataItem.departmentId === item.departmentId
          ? {
              ...dataItem,
              content: {
                ...dataItem.content,
                isDibs: !dataItem.content.isDibs,
              },
            }
          : dataItem,
      ),
    );
    try {
      await postFetcher(`/dibs/${item.departmentId}`);
    } catch (error) {
      console.log(error);
    }
  };
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const filteredRating = (rating) => (isNaN(rating) ? 0 : rating.toFixed(1));

  const theme = useTheme();
  const navigate = useNavigate();
  return (
    item.content && (
      <S.ItemWrapper>
        <S.LeftWrapper
          onClick={() => navigate(`/department/${item.departmentId}`)}
        >
          <S.MainContent>
            <div style={{ display: 'flex', gap: 10 }}>
              <Tag
                content={'근로'}
                activeState={
                  item.content.scholarshipRecruitment &&
                  item.content.leftDays > 0
                }
              />
              <Tag
                content={'직장체험형인턴'}
                activeState={
                  item.content.internRecruitment && item.content.leftDays > 0
                }
              />
            </div>
            <p
              style={{
                fontSize: 19,
                fontWeight: 600,
                color: theme.colors.grey4,
              }}
            >
              {item.content.name}
            </p>
          </S.MainContent>
          {item.content.leftDays > 0 && (
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: theme.colors.grey3,
              }}
            >
              D-{item.content.leftDays}
            </p>
          )}
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.ReviewContent>
            <div style={{ display: 'flex', gap: 4 }}>
              {[...Array(Math.round(filteredRating(item.content.rating)))].map(
                (_, index) => (
                  <img
                    key={`filled-${index}`}
                    src={starFilled}
                    alt="별점"
                    width={20}
                    height={20}
                  />
                ),
              )}
              {[
                ...Array(5 - Math.round(filteredRating(item.content.rating))),
              ].map((_, index) => (
                <img
                  key={`empty-${index}`}
                  src={starEmpty}
                  alt="별점"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <p
              style={{
                fontSize: 12,
                color: theme.colors.grey2,
                fontWeight: 600,
              }}
            >
              {filteredRating(item.content.rating)}점
            </p>
          </S.ReviewContent>
          {userInfo && (
            <button onClick={handleLikeClick}>
              {item.content.isDibs ? (
                <img
                  src={likeButtonLike}
                  alt="좋아요버튼"
                  width={42}
                  height={42}
                />
              ) : (
                <img
                  src={likeButtonDefault}
                  alt="좋아요버튼"
                  width={42}
                  height={42}
                />
              )}
            </button>
          )}
        </S.RightWrapper>
      </S.ItemWrapper>
    )
  );
};

export default RecruitItem;

const S = {
  ItemWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    width: 470px;
    height: 150px;
    padding: 20px 25px;

    border: 1px solid ${(props) => props.theme.colors.grey1};
    border-radius: 10px;
    cursor: pointer;
  `,
  MainContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  LeftWrapper: styled.div`
    flex-grow: 8.5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `,
  RightWrapper: styled.div`
    flex-grow: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    height: 100%;
  `,
  ReviewContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
  `,
};
