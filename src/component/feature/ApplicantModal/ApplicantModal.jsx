import styled from 'styled-components';

const ApplicantModal = ({ item, role }) => {
  console.log(role);
  function convertScheduleToMatrix(schedule) {
    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const matrix = Array(12)
      .fill()
      .map(() => Array(7).fill(false));

    daysOfWeek.forEach((day, dayIndex) => {
      const daySchedule = schedule[day];
      daySchedule.forEach((timeSlot) => {
        for (let hour = timeSlot.startTime; hour < timeSlot.endTime; hour++) {
          matrix[hour][dayIndex] = true;
        }
      });
    });

    return matrix;
  }

  const TextTemplate = ({ label, content }) => {
    return (
      <S.TextWrapper>
        <S.LabelWrapper>
          <S.Label>{label}</S.Label>
        </S.LabelWrapper>
        <S.Content>{content}</S.Content>
      </S.TextWrapper>
    );
  };
  const value = convertScheduleToMatrix(JSON.parse(item.schedule));

  return (
    <S.Container>
      <TextTemplate
        label={`${role == 'ADMIN' ? '이름' : '지원학과'}`}
        content={item.name}
      />
      <TextTemplate label="생년월일" content={item.birthday} />
      <TextTemplate label="학번" content={item.studentId} />
      <TextTemplate label="학부/과" content={item.departmentName} />
      <TextTemplate label="연락처" content={item.phone} />
      <TextTemplate label="이메일" content={item.email} />
      <TextTemplate label="주소" content={item.address} />
      <TextTemplate label="근무지(직전학기)" content={item.workplace} />
      <TextTemplate label="총 근로학기" content={item.totalWorkSemester} />
      <TextTemplate label="타장학 수혜내용" content={item.otherScholarship} />
      <TextTemplate label="지원동기" content={item.content} />
      <S.Table className="timetable">
        <thead>
          <tr>
            <S.TH></S.TH>
            <S.TH>Mon</S.TH>
            <S.TH>Tue</S.TH>
            <S.TH>Wed</S.TH>
            <S.TH>Thu</S.TH>
            <S.TH>Fri</S.TH>
            <S.TH>Sat</S.TH>
            <S.TH>Sun</S.TH>
          </tr>
        </thead>
        <tbody>
          {value.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <S.TH>{rowIndex + 9}</S.TH>
              {row.map((_, columnIndex) => (
                <S.TD
                  key={columnIndex}
                  selected={value[rowIndex][columnIndex]}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
};
export default ApplicantModal;

const S = {
  Container: styled.div`
    max-height: 500px;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    gap: 20px;
  `,
  TextWrapper: styled.div`
    display: flex;
    gap: 10px;
  `,
  LabelWrapper: styled.div`
    width: 140px;
  `,
  Label: styled.p`
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.blue};
  `,
  Content: styled.p`
    width: 500px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.grey4};
    word-break: keep-all;
    white-space: pre-wrap;
  `,
  Table: styled.table`
    cursor: pointer;
  `,
  TD: styled.td`
    width: 80px;
    height: 60px;
    background-color: ${(props) =>
      props.selected ? props.theme.colors.blue : 'white'};
    border: 1px solid ${(props) => props.theme.colors.grey2};
  `,
  TH: styled.th`
    background-color: ${(props) => props.theme.colors.grey1};
  `,
};
