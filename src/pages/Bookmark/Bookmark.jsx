import { S } from './style';
import useBookMark from '../../hook/useBookmark';
import RecruitItem from '../../component/feature/Board/RecruitItem';

const Bookmark = () => {
  const { departmentList, setDepartmentList } = useBookMark();

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.BoardWrapper>
          {departmentList &&
            departmentList.map((item) => (
              <RecruitItem
                key={item.id}
                item={item}
                setData={setDepartmentList}
              />
            ))}
        </S.BoardWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
};
export default Bookmark;
