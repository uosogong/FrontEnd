import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const dummyData = [
  {
    id: 1,
    title: '전자전기컴퓨터공학부',
    description: '2024-2학기 직장체험인턴 장학 모집',
  },
  {
    id: 2,
    title: '전자전기컴퓨터공학부',
    description: '2024-2학기 직장체험인턴 장학 모집',
  },
  {
    id: 3,
    title: '전자전기컴퓨터공학부',
    description: '2024-2학기 직장체험인턴 장학 모집',
  },
  {
    id: 4,
    title: '전자전기컴퓨터공학부',
    description: '2024-2학기 직장체험인턴 장학 모집',
  },
  {
    id: 5,
    title: '전자전기컴퓨터공학부',
    description: '2024-2학기 직장체험인턴 장학 모집',
  },
];

const RangkingBoard = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <p style={{ fontSize: 16, fontWeight: 600 }}>인기부서 TOP 5</p>
      <div>
        {dummyData.map((item, index) => {
          return (
            <S.RankingItem
              index={index}
              key={item.id}
              onClick={() => navigate(`/department/${item.id}`)}
            >
              <p style={{ fontSize: 12, fontWeight: 600 }}>{item.title}</p>
              <p style={{ fontSize: 12 }}>{item.description}</p>
            </S.RankingItem>
          );
        })}
      </div>
    </S.Wrapper>
  );
};

export default RangkingBoard;
const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    padding: 15px;
    gap: 10px;

    border: 1px solid ${(props) => props.theme.colors.grey1};
    border-radius: 10px;

    height: fit-content;
  `,
  RankingItem: styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border-top: 0.5px solid ${(props) => props.theme.colors.grey2};
    gap: 4px;
    ${(props) =>
      props.index === 0 &&
      css`
        border-top: none;
      `}
    &:hover {
      border-radius: 4px;
      background: ${(props) => props.theme.colors.grey1};
    }
  `,
};
