import { useEffect, useState } from 'react';
import { getFetcher } from '../api/method';

const useBookMark = () => {
  const [departmentList, setDepartmentList] = useState([]);
  console.log(departmentList);
  useEffect(() => {
    fetchDepartment();
  }, []);

  const fetchDepartment = async () => {
    const { departments } = await getFetcher('/departments');
    console.log(departments);
    setDepartmentList(
      departments.filter((department) => department.content.isDibs),
    );
  };

  return { departmentList, setDepartmentList };
};

export default useBookMark;
