import styled from 'styled-components';
import RecruitItem from './RecruitItem';
import { useState } from 'react';

const dummyData = [
  {
    id: 1,
    type: ['직장체험인턴'],
    date: 'D-5',
    title: '공과대학 컴퓨터과학부',
    description: '타 근로 장학과 중복 불가·재학생',
    score: 4.2,
    like: true,
  },
  {
    id: 2,
    type: ['근로'],
    title: '공과대학 컴퓨터과학부',
    date: 'D-5',
    description: '타 근로 장학과 중복 불가·재학생',
    score: 4.2,
    like: true,
  },
  {
    id: 3,
    type: ['직장체험인턴', '근로'],
    title: '공과대학 컴퓨터과학부',
    date: 'D-5',
    description: '타 근로 장학과 중복 불가·재학생',
    score: 4.2,
    like: true,
  },
];

const RecruitBoard = () => {
  const [data, setData] = useState(dummyData);

  return (
    <S.RecruitBoardWrapper>
      {data.map((item) => (
        <RecruitItem key={item.id} item={item} setData={setData} />
      ))}
    </S.RecruitBoardWrapper>
  );
};

export default RecruitBoard;

const S = {
  RecruitBoardWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    flex-basis: 75%;
  `,
};
