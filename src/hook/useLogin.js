import { useRef } from 'react';
import { postFetcher } from '../api/method';
import { useSetAtom } from 'jotai';
import { tokenAtom } from '../store/tokenAtom';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();
  const setAccessToken = useSetAtom(tokenAtom);
  const userIdRef = useRef();
  const userPwdRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      email: userIdRef.current.value,
      password: userPwdRef.current.value,
    };
    login();
  };

  const login = async () => {
    try {
      const res = await postFetcher('/signin', {
        email: inputData.email,
        password: inputData.password,
      });
      const { accessToken } = res;
      setAccessToken(accessToken);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    userIdRef,
    userPwdRef,
    handleSubmit,
  };
};

export default useLogin;
