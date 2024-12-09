import styled from 'styled-components';

const ApplicantModal = ({ item }) => {
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

  return (
    <S.Container>
      <TextTemplate label="이름" content={item.name} />
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
    </S.Container>
  );
};
export default ApplicantModal;

const S = {
  Container: styled.div`
    max-height: 800px;
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
};
