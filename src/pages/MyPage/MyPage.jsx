import UserPic from '../../assets/icon/UserPic.svg';
import Vector2 from '../../assets/icon/Vector2.svg';
import S from './style';

const MyPage = () => {
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
        <S.Button>
          <S.ButtonIcon>✍🏻</S.ButtonIcon>
          <p>개인정보 수정</p>
          <S.ArrowIcon src={Vector2} />
        </S.Button>
        <S.Button>
          <S.ButtonIcon>📑</S.ButtonIcon>
          <p>찜 목록</p>
          <S.ArrowIcon src={Vector2} />
        </S.Button>
        <S.Button>
          <S.ButtonIcon>📘</S.ButtonIcon>
          <p>내 시간표 관리</p>
          <S.ArrowIcon src={Vector2} />
        </S.Button>
      </S.BottomContainer>
    </S.Wrapper>
  );
};
export default MyPage;
