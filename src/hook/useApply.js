import { useEffect, useState } from 'react';
import { validateField } from '../utils';
import { useLocation } from 'react-router-dom';

const useApply = () => {
  const location = useLocation();
  const pageTitle = location.state || '';

  const [applyForm, setApplyForm] = useState({
    email: '',
    phoneNum: '',
    address: '',
    detailContent: '',
    prevloc: '',
    workCount: 0,
    other: '',
  });

  const [errors, setErrors] = useState({
    email: null,
    phoneNum: null,
    address: null,
    detailContent: null,
    prevloc: null,
    workCount: null,
    other: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplyForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const stored = localStorage.getItem('apply');
    if (stored) {
      setApplyForm(JSON.parse(stored));
    }
  }, []);

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
