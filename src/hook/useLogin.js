import { useRef } from 'react';
const useLogin = () => {
  const userIdRef = useRef();
  const userPwdRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      email: userIdRef.current.value,
      password: userPwdRef.current.value,
    };

    // TODO: api 나오면 console 대신 axios 호출
    console.log(`email: ${inputData.email} pwd: ${inputData.password}`);
  };

  return {
    userIdRef,
    userPwdRef,
    handleSubmit,
  };
};

export default useLogin;
