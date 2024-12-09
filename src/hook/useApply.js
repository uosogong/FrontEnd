import { useEffect, useState, useCallback } from 'react';
import { validateField } from '../utils';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { getFetcher } from '../api/method';

const useApply = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const pageTitle = location.state || '';

  const [applyForm, setApplyForm] = useState({
    isScholarshipResume: true,
    isInternResume: true,
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

  const [uneditableData, setUneditableData] = useState({
    name: '',
    birthDay: '',
    studentId: '',
    departmentName: '',
  });

  // 직체인지 아닌지 판별
  useEffect(() => {
    if (pageTitle === '직체') {
      setApplyForm((prevForm) => ({
        ...prevForm,
        isInternResume: true,
        isScholarshipResume: false,
      }));
    } else {
      setApplyForm((prevForm) => ({
        ...prevForm,
        isInternResume: false,
        isScholarshipResume: true,
      }));
    }
  }, [pageTitle]);

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
    const { name, studentId, departmentName, birthDay } = res.message;

    setUneditableData({
      name: name,
      studentId: studentId,
      departmentName: departmentName,
      birthDay: birthDay,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      localStorage.removeItem('apply');
      console.log(applyForm, uneditableData);
      navigate('/mypage/timetable', {
        state: { applyForm, uneditableData, id: id },
      });
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
    Object.values(applyForm).every((value) =>
      typeof value === 'string'
        ? value.trim() !== ''
        : value !== null && value !== undefined,
    ) && Object.values(errors).every((error) => error === null);

  return {
    isFormValid,
    handleBlur,
    handleTempSave,
    handleSubmit,
    handleChange,
    errors,
    applyForm,
    pageTitle,
    uneditableData,
  };
};

export default useApply;
