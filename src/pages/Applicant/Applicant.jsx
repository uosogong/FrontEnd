import { S } from './style';
import ApplicantItem from '../../component/feature/Applicant/ApplicantItem';
import { getFetcher } from '../../api/method';
import { useEffect, useState } from 'react';

const Applicant = () => {
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    const { role } = JSON.parse(localStorage.getItem('userInfo'));
    if (role == 'ADMIN') fetchResume();
    else fetchMyResume();
  }, []);

  console.log(resumes);

  const fetchResume = async () => {
    const res = await getFetcher(
      `/resumes?isScholarshipResume=true&isInternResume=true`,
    );
    setResumes(res.message);
  };

  const fetchMyResume = async () => {
    const res = await getFetcher(`/resumes/me`);
    setResumes(res.message);
  };
  return (
    <S.Container>
      <S.ContentWrapper>
        {resumes.map((resume, i) => (
          <ApplicantItem item={resume} key={i} />
        ))}
      </S.ContentWrapper>
    </S.Container>
  );
};
export default Applicant;
