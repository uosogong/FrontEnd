import styled, { useTheme } from 'styled-components';
import { useTableDragSelect } from 'use-table-drag-select';
import Table from './Table.jsx';
import { timeTableParsor } from '../../utils/timeTableParsor.js';
import Button from '../../component/common/Button/Button.jsx';

const TimeTable = () => {
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
  console.log(getJson());
  const theme = useTheme();
  return (
    <S.Wrapper>
      <p style={{ fontSize: 28, fontWeight: 700, marginBottom: 40 }}>
        시간표 작성 페이지
      </p>
      <Table ref={ref} value={value} />
      <div style={{ display: 'flex', gap: 10 }}>
        <Button style={{ width: 250 }}>제출</Button>
        <Button style={{ width: 250, backgroundColor: theme.colors.grey2 }}>
          임시저장
        </Button>
      </div>
    </S.Wrapper>
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
    transform: translateY(-5%);
  `,
};
