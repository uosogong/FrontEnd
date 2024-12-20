import { useEffect, useRef, useState } from 'react';
import Button from '../../component/common/Button/Button';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import TextArea from '../../component/common/TextArea';
import DateInput from '../../component/common/DateInput /DateInput';
import useModal from '../../hook/UI/useModal';
import { patchFetcher } from '../../api/method';
import { useNavigate } from 'react-router-dom';

const Staff = () => {
  const theme = useTheme();
  const [isIntern, setIsIntern] = useState(false);
  const [isWork, setIsWork] = useState(false);
  const dateRef = useRef();
  const introRef = useRef();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const navigate = useNavigate();
  useEffect(() => {
    load();
  }, []);

  const modal = useModal({
    title: '임시저장되었습니다.',
    onOk: () => {},
  });

  const errormodal = useModal({
    title: '마감일과 부서소개를 채워주세요.',
    onOk: () => {},
  });

  const successModal = useModal({
    title: '저장되었습니다.',
    onOk: () => {
      navigate(`/department/${userInfo.departmentId}`);
    },
  });

  const submit = async () => {
    if (
      !introRef.current ||
      !introRef.current.value ||
      !dateRef.current ||
      !dateRef.current.value
    ) {
      errormodal.open();
      return;
    }
    await patchFetcher(`/departments/${userInfo.departmentId}`, {
      scholarshipRecruitment: isWork,
      internRecruitment: isIntern,
      introduction: introRef.current.value,
      recruitEndDay: dateRef.current.value,
    });
    successModal.open();
  };

  const load = () => {
    setIsIntern(localStorage.getItem('isIntern'));
    setIsWork(localStorage.getItem('isWork'));
    dateRef.current.value = localStorage.getItem('date');
    introRef.current.value = localStorage.getItem('intro');
  };

  const save = () => {
    localStorage.setItem('isIntern', isIntern);
    localStorage.setItem('isWork', isWork);
    localStorage.setItem('date', dateRef.current.value);
    localStorage.setItem('intro', introRef.current.value);
  };

  return (
    <S.Wrapper>
      {modal.render()}
      {errormodal.render()}
      {successModal.render()}
      <p style={{ fontSize: 28, fontWeight: 700, marginBottom: 40 }}>
        교직원용 모집 작성 페이지
      </p>
      <div
        style={{
          width: 600,
          display: 'flex',
          justifyContent: 'start',
          flexDirection: 'column',
          gap: 30,
        }}
      >
        <S.ContentWrapper>
          <p style={{ fontSize: 20, fontWeight: 600 }}>모집 분야</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button
              style={{
                width: 80,
                backgroundColor: !isWork && theme.colors.grey2,
              }}
              onClick={() => setIsWork((prev) => !prev)}
            >
              근로
            </Button>
            <Button
              style={{
                backgroundColor: !isIntern && theme.colors.grey2,
              }}
              onClick={() => setIsIntern((prev) => !prev)}
            >
              직장체험형 인턴
            </Button>
          </div>
        </S.ContentWrapper>

        <S.ContentWrapper>
          <p style={{ fontSize: 20, fontWeight: 600 }}>마감일</p>
          <DateInput ref={dateRef} />
        </S.ContentWrapper>

        <S.ContentWrapper>
          <p style={{ fontSize: 20, fontWeight: 600 }}>부서 소개</p>
          <TextArea ref={introRef} style={{ height: 400 }} />
        </S.ContentWrapper>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button style={{ width: 250 }} onClick={submit}>
          제출
        </Button>
        <Button
          style={{ width: 250, backgroundColor: theme.colors.grey2 }}
          onClick={() => {
            save();
            modal.open();
          }}
        >
          임시저장
        </Button>
      </div>
    </S.Wrapper>
  );
};
export default Staff;

const S = {
  Wrapper: styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    padding-top: 50px;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
};
