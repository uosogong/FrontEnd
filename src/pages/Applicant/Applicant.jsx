import { S } from './style';
import ApplicantItem from '../../component/feature/Applicant/ApplicantItem';
import { getFetcher } from '../../api/method';
import { useEffect, useState } from 'react';
const data = {
  id: 1,
  tag: '직장체험인턴',
  name: '조종빈',
  studentId: 2020920059,
  department: '컴퓨터과학부',
  phoneNumber: '010-6374-8063',
  //TODO
  birth: '2001.02.26',
  address: '망우로 18다길 19',
  prevWorkPlace: '전산정보원',
  totalWorkDuration: 3,
  scholarship: '무슨무슨특별장학',
  email: '010jjj@naver.com',
  motivation:
    '이런이런이유로 지원했습니다. 잘 봐주세요. 이런이런이유로 지원했습니다. 잘 봐주세요. 이런이런이유로 지원했습니다. 잘 봐주세요',
};
const Applicant = () => {
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    fetchResume();
  }, []);

  console.log(resumes);

  const fetchResume = async () => {
    const res = await getFetcher(
      `/resumes?isScholarshipResume=true&isInternResume=true`,
    );
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
