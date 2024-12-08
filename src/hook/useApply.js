import { useEffect, useState, useCallback } from 'react';
import { validateField } from '../utils';
import { useLocation } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { getFetcher } from '../api/method';

const useApply = () => {
  const location = useLocation();
  const pageTitle = location.state || '';

  const [applyForm, setApplyForm] = useState({
    email: '',
    phone: '',
    address: '',
    content: '',
    workplace: '',
    totalWorkSemester: 0,
    otherScholarship: '',
  });

  const [errors, setErrors] = useState({
    email: null,
    phone: null,
    address: null,
    content: null,
    workplace: null,
    totalWorkSemester: null,
    otherScholarship: null,
  });

  const unEditableData = useState({
    name: '',
    job: '',
    studentId: '',
    departmentName: '',
  });
  const debouncedValidate = useCallback(
    debounce((name, value) => {
      const errorMsg = validateField(name, value, applyForm);
      setErrors((prev) => ({
        ...prev,
        [name]: errorMsg,
      }));
    }, 300),
    [applyForm],
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplyForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    debouncedValidate(name, value);
  };

  useEffect(() => {
    fetchUserData();
    const stored = localStorage.getItem('apply');
    if (stored) {
      setApplyForm(JSON.parse(stored));
    }
  }, []);

  const fetchUserData = async () => {
    const res = await getFetcher('/users');
    console.log(res);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert(JSON.stringify(applyForm));
      localStorage.removeItem('apply');
    }
  };

  const handleTempSave = () => {
    localStorage.setItem('apply', JSON.stringify(applyForm));
    alert('임시 저장되었습니다.');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value, applyForm);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const isFormValid =
    Object.values(applyForm).every((value) => value.trim() !== '') &&
    Object.values(errors).every((error) => error === null);

  return {
    isFormValid,
    handleBlur,
    handleTempSave,
    handleSubmit,
    handleChange,
    errors,
    applyForm,
    pageTitle,
  };
};

export default useApply;
