import styled, { useTheme } from 'styled-components';
import Tag from '../../common/Tag';
import starFilled from '@assets/icon/star-fill.svg';
import starEmpty from '@assets/icon/star-empty.svg';
import likeButtonDefault from '@assets/images/like-button-default.svg';
import likeButtonLike from '@assets/images/like-button-like.svg';
import { useNavigate } from 'react-router-dom';

const RecruitItem = ({ item, setData }) => {
  // const handleLikeClick = () => {
  //   setData((prevData) =>
  //     prevData.map((dataItem) =>
  //       dataItem.id === item.id
  //         ? { ...dataItem, like: !dataItem.like }
  //         : dataItem,
  //     ),
  //   );
  // };
  const filteredRating = (rating) => (isNaN(rating) ? 0 : rating);

  const theme = useTheme();
  const navigate = useNavigate();
  return (
    item.content && (
      <S.ItemWrapper>
        <S.LeftWrapper
          onClick={() => navigate(`/department/${item.departmentId}`)}
        >
          <S.MainContent>
            <div style={{ display: 'flex', gap: 4 }}>
              {item.content.internRecruitment && <Tag content={'근로'} />}
              {item.content.scholarshipRecruitment && (
                <Tag content={'직장체험형인턴'} />
              )}
            </div>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: theme.colors.grey4,
              }}
            >
              {item.content.name}
            </p>
          </S.MainContent>
          <p
            style={{ fontSize: 14, fontWeight: 700, color: theme.colors.grey3 }}
          >
            D{item.content.leftDays}
          </p>
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
          {/* <button onClick={handleLikeClick}>
          {item.content.like ? (
            <img src={likeButtonLike} alt="좋아요버튼" width={42} height={42} />
          ) : (
            <img
              src={likeButtonDefault}
              alt="좋아요버튼"
              width={42}
              height={42}
            />
          )}
        </button> */}
        </S.RightWrapper>
      </S.ItemWrapper>
    )
  );
};

export default RecruitItem;

const S = {
  ItemWrapper: styled.div`
  display:flex;
  justify-content:space-between;

  width: 470px;
  height: 150px;
  padding:15px; 20px;

  border: 1px solid ${(props) => props.theme.colors.grey1};
  border-radius: 10px;
  cursor:pointer;
`,
  MainContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
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
