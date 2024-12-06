import { postFetcher } from '../api/method';
import SignUp from '../pages/SignUp/SignUp';
import { validateField } from '../utils';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useSignUp = () => {
  const navigate = useNavigate();
  const joinFormRef = useRef({
    email: '',
    password: '',
    confirmPwd: '',
    name: '',
    studentNum: '',
    phoneNum: '',
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
    confirmPwd: null,
    name: null,
    studentNum: null,
    phoneNum: null,
  });

  const [joinState, setJoinState] = useState('');

  const handleChange = (e) => {
    setJoinState('');
    const { name, value } = e.target;
    joinFormRef.current[name] = value;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value, joinFormRef.current);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postFetcher('/signup', {
        name: joinFormRef.current.name,
        email: joinFormRef.current.email,
        password: joinFormRef.current.password,
        studentId: joinFormRef.current.studentNum,
        phone: joinFormRef.current.phoneNum,
      });
      navigate('/');
    } catch (error) {
      console.log(error.status);
      if (error.status === 400) {
        setJoinState('이미 등록된 회원입니다! 🤨');
      }
    }
  };

  const isFormValid =
    Object.values(joinFormRef.current).every((value) => value.trim() !== '') &&
    Object.values(errors).every((error) => error === null);

  return {
    joinFormRef,
    errors,
    setErrors,
    handleChange,
    handleBlur,
    handleSubmit,
    disabled: !isFormValid,
    joinState,
  };
};

export default useSignUp;
