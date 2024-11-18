import { validateField } from '../utils';
import { useRef, useState } from 'react';

const useSignUp = () => {
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

  const handleChange = (e) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(joinFormRef.current));
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
  };
};

export default useSignUp;
