import Vector2 from '../../../assets/icon/Vector2.svg';
import S from '@pages/MyPage/style';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  return (
    <S.BottomContainer>
      <S.Button onClick={() => navigate('/')}>
        <S.ButtonIcon>📂</S.ButtonIcon>
        <p>내 부서가기</p>
        <S.ArrowIcon src={Vector2} />
      </S.Button>
      <S.Button onClick={() => navigate('./staff')}>
        <S.ButtonIcon>✏️</S.ButtonIcon>
        <p>내 부서 작성하기</p>
        <S.ArrowIcon src={Vector2} />
      </S.Button>
      <S.Button onClick={() => navigate('./applicant')}>
        <S.ButtonIcon>👀</S.ButtonIcon>
        <p>지원자 보기</p>
        <S.ArrowIcon src={Vector2} />
      </S.Button>
    </S.BottomContainer>
  );
};

const Student = () => {
  return (
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
  );
};

export { Admin, Student };
