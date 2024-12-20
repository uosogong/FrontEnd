import Button from '../../component/common/Button/Button';
import Input from '../../component/common/Input/Input';
import logo from '../../assets/images/logo.svg';
import S from './style';
import { NavLink } from 'react-router-dom';
import { useLogin } from '../../hook';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { userIdRef, userPwdRef, handleSubmit, onSubmitForm, loginSate } =
    useLogin();
  return (
    <S.Wrapper>
      <img src={logo} alt="메인로고" onClick={() => navigate('/')} />
      <S.ButtonContainer onSubmit={onSubmitForm}>
        <Input
          type="text"
          ref={userIdRef}
          placeholder="이메일을 입력해주세요"
        />
        <Input
          type="password"
          ref={userPwdRef}
          autocomplete="current-password"
          placeholder="비밀번호를 입력해주세요"
        />
        <Button type="submit" onClick={handleSubmit}>
          로그인
        </Button>
      </S.ButtonContainer>
      <S.LoginNav>
        <li>
          <NavLink to="/">아이디 찾기</NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/">비밀번호 찾기</NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/signup">회원가입</NavLink>
        </li>
      </S.LoginNav>
      {loginSate && <p className="err-meg">{loginSate}</p>}
    </S.Wrapper>
  );
};
export default Login;
