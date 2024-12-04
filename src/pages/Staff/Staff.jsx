import { useEffect, useRef, useState } from 'react';
import Button from '../../component/common/Button/Button';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import Input from '../../component/common/Input/Input';
import TextArea from '../../component/common/TextArea';
import useModal from '../../hook/UI/useModal';
import DateInput from '../../component/common/DateInput/DateInput';

const Staff = () => {
  const theme = useTheme();
  const [category, setCategory] = useState(
    localStorage.getItem('category') ?? '직장체험형 인턴',
  );
  const [isIntern, setIsIntern] = useState(false);
  const [isWork, setIsWork] = useState(false);

  const dateRef = useRef();
  const introductionRef = useRef();

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    dateRef.current.value = localStorage.getItem('date');
    introductionRef.current.value = localStorage.getItem('introduction');
  };

  const modal = useModal({
    title: '저장되었습니다.',
    onOk: () => {},
  });
  const submitModal = useModal({
    title: '제출되었습니다.',
    onOk: () => {},
  });
  const save = () => {
    localStorage.setItem('date', dateRef.current.value);
    localStorage.setItem('introduction', introductionRef.current.value);
  };

  return (
    <S.Wrapper>
      {modal.render()}
      {submitModal.render()}
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
                backgroundColor: !isIntern && theme.colors.grey2,
              }}
              onClick={() => setIsIntern((prev) => !prev)}
            >
              근로
            </Button>
            <Button
              style={{
                backgroundColor: !isWork && theme.colors.grey2,
              }}
              onClick={() => setIsWork((prev) => !prev)}
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
          <TextArea ref={introductionRef} />
        </S.ContentWrapper>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button style={{ width: 250 }} onClick={() => submitModal.open()}>
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
    padding-top: 60px;
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
