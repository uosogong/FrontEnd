import { S } from './style';
import useBookMark from '../../hook/useBookmark';
import RecruitItem from '../../component/feature/Board/RecruitItem';
import { useNavigate } from 'react-router-dom';

const Bookmark = () => {
  const { departmentList, setDepartmentList } = useBookMark();
  const navigate = useNavigate();
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
                onClick={() => navigate(`/department/${item.id}`)}
              />
            ))}
        </S.BoardWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
};
export default Bookmark;
