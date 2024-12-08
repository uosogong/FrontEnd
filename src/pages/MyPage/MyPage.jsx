import UserPic from '../../assets/icon/UserPic.svg';
import Vector2 from '../../assets/icon/Vector2.svg';
import { useNavigate } from 'react-router-dom';
import S from './style';
import { useEffect, useState } from 'react';
import { Admin, Student } from '../../component/feature/Mypage';

const MyPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const { name, role } = JSON.parse(localStorage.getItem('userInfo'));
    setUser(name);
    setRole(role);
  }, []);
  return (
    <S.Wrapper>
      <S.TopContainer>
        <div>
          <h2>안녕하세요</h2>
          <h1>{`${user}님 💬`}</h1>
        </div>
        <img src={UserPic}></img>
      </S.TopContainer>
      {role === 'ADMIN' ? <Admin /> : <Student />}
    </S.Wrapper>
  );
};
export default MyPage;
