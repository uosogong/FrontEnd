import UserPic from '../../assets/icon/UserPic.svg';
import Vector2 from '../../assets/icon/Vector2.svg';
import { useNavigate } from 'react-router-dom';
import S from './style';

const MyPage = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.TopContainer>
        <div>
          <h2>안녕하세요</h2>
          <h1>시대평님</h1>
        </div>
        <img src={UserPic}></img>
      </S.TopContainer>
      <S.BottomContainer>
        <S.Button onClick={() => navigate('./edit')}>
          <S.ButtonIcon>✍🏻</S.ButtonIcon>
          <p>개인정보 수정</p>
          <S.ArrowIcon src={Vector2} />
        </S.Button>
        <S.Button onClick={() => navigate('./bookmark')}>
          <S.ButtonIcon>📑</S.ButtonIcon>
          <p>찜 목록</p>
          <S.ArrowIcon src={Vector2} />
        </S.Button>
        <S.Button onClick={() => navigate('./edit')}>
          <S.ButtonIcon>📂</S.ButtonIcon>
          <p>내 지원목록 보기</p>
          <S.ArrowIcon src={Vector2} />
        </S.Button>
        <S.Button onClick={() => navigate('./timetable')}>
          <S.ButtonIcon>📘</S.ButtonIcon>
          <p>내 시간표 관리</p>
          <S.ArrowIcon src={Vector2} />
        </S.Button>
      </S.BottomContainer>
    </S.Wrapper>
  );
};
export default MyPage;
