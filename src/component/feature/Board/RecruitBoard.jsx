import styled from 'styled-components';
import RecruitItem from './RecruitItem';

const RecruitBoard = ({ departmentList, setDepartmentList }) => {
  return (
    <S.RecruitBoardWrapper>
      {departmentList &&
        departmentList.map((item) => (
          <RecruitItem key={item.id} item={item} setData={setDepartmentList} />
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
