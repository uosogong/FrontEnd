import S from './style';
import LeftCategoryBar from './LeftCategoryBoard';
import useCheckBox from '@hook/UI/useCheckBox';
import useDropdown from '@hook/UI/useDropdown';
import KeywordInput from '../../common/KeywordInput';
import RecruitBoard from './RecruitBoard';
import RangkingBoard from './RankingBoard';
import { useRef } from 'react';
const Board = () => {
  const checkbox = useCheckBox();
  const dropdown = useDropdown({
    title: '정렬순',
    items: ['최신순', '평점순'],
  });
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value = '';
    console.log(inputRef.current.value);
  };

  return (
    <S.Wrapper>
      <S.BoardBar>
        <LeftCategoryBar checkbox={checkbox} dropdown={dropdown} />
        <KeywordInput ref={inputRef} handleSubmit={handleSubmit} />
      </S.BoardBar>
      <S.BoardWrapper>
        <RecruitBoard />
        <RangkingBoard />
      </S.BoardWrapper>
    </S.Wrapper>
  );
};

export default Board;
