import { useEffect, useRef, useState } from 'react';
import { getFetcher } from '../api/method';
import Fuse from 'fuse.js';
import useCheckBox from '../hook/UI/useCheckBox';
import useDropDown from '../hook/UI/useDropdown';

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

const useRecruitBoard = () => {
  const originalDataRef = useRef();
  const [searchData, setSearchData] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [fuse, setFuse] = useState();

  const checkbox = useCheckBox();
  const dropdown = useDropDown({
    title: '정렬순',
    items: ['최신순', '평점순'],
  });

  const options = {
    keys: ['content.name'],
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  useEffect(() => {
    const filterdData = filterDepartment();
    sortDepartment(filterdData);
  }, [dropdown.selectedItem, checkbox.isCheck]);

  const fetchDepartment = async () => {
    const { departments } = await getFetcher('/departments');
    setDepartmentList(departments);
    setSearchData(departments);
    originalDataRef.data = departments;

    const fuse = new Fuse(departments, options);
    setFuse(fuse);
  };

  const searchDepartment = (input) => {
    dropdown.reset();
    checkbox.reset();
    if (input === '') {
      setSearchData(originalDataRef.data);
      setDepartmentList(originalDataRef.data);
      return;
    }
    const results = fuse.search(input);
    setSearchData(results.map((result) => result.item));
    setDepartmentList(results.map((result) => result.item));
  };

  const filterDepartment = () => {
    if (!checkbox.isCheck) {
      return searchData;
    }
    const results = searchData.filter(
      (department) =>
        department.content.internRecruitment ||
        department.content.scholarshipRecruitment,
    );
    return results;
  };

  const sortDepartment = (filterdData) => {
    if (
      dropdown.selectedItem === '최신순' ||
      dropdown.selectedItem === '정렬순'
    ) {
      setDepartmentList(filterdData);
      return;
    }

    const results = [...filterdData].sort((a, b) => {
      const ratingA = parseFloat(a.content.rating);
      const ratingB = parseFloat(b.content.rating);

      if (isNaN(ratingA) && isNaN(ratingB)) {
        return new Date(b.content.updateAt) - new Date(a.content.updateAt);
      }
      if (isNaN(ratingA)) return 1;
      if (isNaN(ratingB)) return -1;

      if (ratingA === ratingB) {
        return new Date(b.content.updateAt) - new Date(a.content.updateAt);
      }

      return ratingB - ratingA;
    });

    setDepartmentList(results);
  };

  return {
    departmentList,
    setDepartmentList,
    searchDepartment,
    checkbox,
    dropdown,
  };
};

export { useTopRank, useRecruitBoard };
