import { useEffect, useState } from 'react';
import { getFetcher } from '../api/method';

const useTopRank = () => {
  const [topList, setTopList] = useState([]);
  useEffect(() => {
    fetchTopRank();
  }, []);

  const fetchTopRank = async () => {
    const { topDepartments } = await getFetcher('/departments/top');
    setTopList(topDepartments);
  };

  return { topList };
};

export { useTopRank };
