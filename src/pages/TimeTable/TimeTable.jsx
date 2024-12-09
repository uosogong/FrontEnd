import styled, { useTheme } from 'styled-components';
import { useTableDragSelect } from 'use-table-drag-select';
import Table from './Table.jsx';
import { timeTableParsor } from '../../utils/timeTableParsor.js';
import Button from '../../component/common/Button/Button.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { postFetcher } from '../../api/method.js';
import useModal from '../../hook/UI/useModal.jsx';

const TimeTable = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const modal = useModal({
    title: '저장되었습니다.',
    onOk: () => navigate('/'),
  });
  const errorModal = useModal({
    title: '네트워크 오류로 저장에 실패했습니다.',
    onClick: () => {},
  });

  const location = useLocation();
  const [ref, value] = useTableDragSelect([
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
  ]);

  const getJson = () => timeTableParsor(value);

  const submit = async () => {
    try {
      await postFetcher(`/resumes/${location.state.id}`, {
        isScholarshipResume: location.state.applyForm.isScholarshipResume,
        isInternResume: location.state.applyForm.isInternResume,
        phone: location.state.applyForm.phone,
        address: location.state.applyForm.address,
        workplace: location.state.applyForm.workplace,
        totalWorkSemester: location.state.applyForm.totalWorkSemester,
        otherScholarship: location.state.applyForm.otherScholarship,
        email: location.state.applyForm.email,
        schedule: getJson(),
        content: location.state.applyForm.content,
        birthday: location.state.uneditableData.birthDay,
      });
      modal.open();
    } catch (error) {
      console.log(error);
      errorModal.render();
    }
  };

  return (
    <>
      {modal.render()}
      {errorModal.render()}
      <S.Wrapper>
        <p style={{ fontSize: 28, fontWeight: 700, marginBottom: 40 }}>
          시간표 작성 페이지
        </p>
        <Table ref={ref} value={value} />
        <div style={{ display: 'flex', gap: 10 }}>
          <Button style={{ width: 250 }} onClick={submit}>
            제출
          </Button>
          <Button style={{ width: 250, backgroundColor: theme.colors.grey2 }}>
            임시저장
          </Button>
        </div>
      </S.Wrapper>
    </>
  );
};
export default TimeTable;

const S = {
  Wrapper: styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  `,
};
