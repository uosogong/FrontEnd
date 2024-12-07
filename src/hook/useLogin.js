import { useRef, useState } from 'react';
import { postFetcher } from '../api/method';
import { useSetAtom } from 'jotai';
import { tokenAtom } from '../store/tokenAtom';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();
  const setAccessToken = useSetAtom(tokenAtom);
  const userIdRef = useRef();
  const userPwdRef = useRef();
  const [loginSate, setLoginState] = useState('');

  // 클릭으로 트리거 되는 제출로직
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      email: userIdRef.current.value,
      password: userPwdRef.current.value,
    };
    login(inputData);
  };

  // 엔터시 트리거 되는 제출로직
  const onSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const login = async (inputData) => {
    try {
      const res = await postFetcher('/signin', {
        email: inputData.email,
        password: inputData.password,
      });
      console.log(res);
      const { token, role, name } = res.message;
      setAccessToken((prev) => ({
        ...prev,
        name,
        token,
        role,
      }));
      localStorage.setItem('accessToken', token);
      localStorage.setItem(
        'userInfo',
        JSON.stringify({
          name,
          token,
          role,
        }),
      );
      navigate('/');
    } catch (error) {
      if (error.status === 500) {
        setLoginState('아이디와 비밀번호를 다시 확인해주세요! 🤨');
      }
    }
  };

  return {
    userIdRef,
    userPwdRef,
    handleSubmit,
    onSubmitForm,
    loginSate,
  };
};

export default useLogin;
