import S from './style';
import LeftCategoryBar from './LeftCategoryBoard';
import KeywordInput from '../../common/KeywordInput';
import RecruitBoard from './RecruitBoard';
import RangkingBoard from './RankingBoard';
import { useRef } from 'react';
import { useRecruitBoard } from '../../../hook/useMain';
const Board = () => {
  const inputRef = useRef();
  const {
    departmentList,
    setDepartmentList,
    searchDepartment,
    checkbox,
    dropdown,
  } = useRecruitBoard();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchDepartment(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <S.Wrapper>
      <S.BoardBar>
        <LeftCategoryBar checkbox={checkbox} dropdown={dropdown} />
        <KeywordInput ref={inputRef} handleSubmit={handleSubmit} />
      </S.BoardBar>
      <S.BoardWrapper>
        <RecruitBoard
          departmentList={departmentList}
          setDepartmentList={setDepartmentList}
        />
        <RangkingBoard />
      </S.BoardWrapper>
    </S.Wrapper>
  );
};

export default Board;
