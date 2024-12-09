import { getFetcher, patchFetcher } from '../api/method';
import { debounce } from 'lodash';
import { validateField } from '../utils';
import { useRef, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { tokenAtom } from '../store/tokenAtom';

const useUserEdit = () => {
  const navigate = useNavigate();
  const editFormRef = useRef({
    email: '',
    password: '',
    confirmPwd: '',
    name: '',
    phoneNum: '',
    departmentName: '',
    birthDay: '',
  });

  const [formState, setFormState] = useState({ ...editFormRef.current });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    confirmPwd: null,
    name: null,
    phoneNum: null,
  });

  const [token, setToken] = useAtom(tokenAtom);

  const [joinState, setJoinState] = useState('');

  // 정보 가져오기
  const fetchUserInfo = useCallback(async () => {
    try {
      const { message } = await getFetcher('/users');
      console.log(message);
      const { name, email, phone, birthDay, departmentName } = message || {};

      if (name && email && phone) {
        const updatedForm = {
          name,
          email,
          phoneNum: phone,
          password: '',
          confirmPwd: '',
          birthDay,
          departmentName,
        };
        editFormRef.current = updatedForm;
        setFormState(updatedForm);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const handleChange = (e) => {
    setJoinState('');
    const { name, value } = e.target;
    editFormRef.current[name] = value;

    debounceValidate(name, value);
  };

  // 300ms 이상 멈추면 유효성 검사 반영
  const debounceValidate = useCallback(
    debounce((name, value) => {
      const errorMsg = validateField(name, value, editFormRef.current);
      setErrors((prev) => ({
        ...prev,
        [name]: errorMsg,
      }));
    }, 300),
    [],
  );

  // 초점 OUT시 유효성 검사
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value, editFormRef.current);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await patchFetcher('/users', {
        name: editFormRef.current.name,
        email: editFormRef.current.email,
        password: editFormRef.current.password,
        phone: editFormRef.current.phoneNum,
        departmentName: editFormRef.current.departmentName,
        birthday: editFormRef.current.birthDay,
      });

      navigate('/');
    } catch (error) {
      console.log(error.status);
      if (error.status === 400) {
        setJoinState('유효하지 않은 수정 정보입니다 🤨');
      }
    }
  };

  const isFormValid =
    Object.values(editFormRef.current).every((value) =>
      typeof value === 'string' ? value.trim() !== '' : value !== '',
    ) && Object.values(errors).every((error) => error === null);

  return {
    editFormRef,
    errors,
    setErrors,
    handleChange,
    handleBlur,
    handleSubmit,
    joinState,
    disabled: !isFormValid,
  };
};

export default useUserEdit;
