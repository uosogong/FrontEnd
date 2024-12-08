import { useState, useEffect } from 'react';
import { getFetcher, postFetcher } from '../api/method';
import useDropdown from './UI/useDropdown';

const useCommnent = ({ id }) => {
  const dropdown = useDropdown({
    title: '평점별 모아보기',
    items: ['평점 5점', '평점 4점', '평점 3점', '평점 2점', '평점 1점'],
    onSelect: (item) => handleDropdownChange(item),
  });

  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const { feedbackList } = await getFetcher(`feedbacks/${id}`);
    setFeedbackList(feedbackList);
  };

  const filteredFeedbackList = feedbackList.filter((feedback) => {
    if (dropdown.selectedItem === '평점별 모아보기') return true;
    const rating = parseInt(
      dropdown.selectedItem.replace('평점 ', '').replace('점', ''),
      10,
    );
    return feedback.rating === rating;
  });

  const busyState = (busy) => {
    switch (busy) {
      case 'HARD':
        return '매우바쁨';
      case 'NORMAL':
        return '보통';
      case 'EASY':
        return '널널함';
    }
  };

  const moodState = (mood) => {
    switch (mood) {
      case 'HARMONY':
        return '화목함';
      case 'STRICT':
        return '엄격함';
      case 'PLEASANT':
        return '유쾌함';
      case 'SILENCE':
        return '적막함';
    }
  };

  return {
    dropdown,
    feedbackList,
    setFeedbackList,
    filteredFeedbackList,
    moodState,
    busyState,
  };
};

const useContent = ({ id }) => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [isDib, setIsDib] = useState(false);

  const [Info, setInfo] = useState({
    internRecruitment: false,
    introduction: '',
    leftDays: 0,
    name: '',
    rating: '0',
    scholarshipRecruitment: false,
    updateAt: '',
  });

  useEffect(() => {
    fetchDepInfo();
    const { role } = JSON.parse(localStorage.getItem('userInfo')) || '';
    setUserRole(role);
    fetchDib();
  }, [id]);

  const fetchDepInfo = async () => {
    try {
      const res = await getFetcher(`/departments/${id}`);
      console.log(res);
      setInfo(res.departmentDetail);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDib = async () => {
    try {
      const { userDib } = await getFetcher(`/dibs/${id}`);
      setIsDib(userDib);
    } catch (err) {
      console.log(err);
    }
  };

  const postDib = async () => {
    try {
      const { changedStatus } = await postFetcher(`/dibs/${id}`);
      setIsDib(changedStatus);
    } catch (err) {
      console.log(err);
    }
  };

  const handleApplyClick = () => {
    setIsApplyModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setIsApplyModalOpen(false);
  };
  return {
    isApplyModalOpen,
    Info,
    handleApplyClick,
    handleCloseApplyModal,
    userRole,
    isDib,
    postDib,
  };
};

export { useCommnent, useContent };
