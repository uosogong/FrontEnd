import { validateField } from '../utils';
import { useState } from 'react';

const useSignUp = () => {
  const [joinForm, setJoinForm] = useState({
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
    setJoinForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value, joinForm);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(joinForm));
  };

  const isFormValid =
    Object.values(joinForm).every((value) => value.trim() !== '') &&
    Object.values(errors).every((error) => error === null);

  return {
    joinForm,
    setJoinForm,
    errors,
    setErrors,
    handleChange,
    handleBlur,
    handleSubmit,
    disabled: !isFormValid,
  };
};

export default useSignUp;
