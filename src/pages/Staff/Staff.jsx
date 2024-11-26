import { useEffect, useRef, useState } from 'react';
import Button from '../../component/common/Button/Button';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import Input from '../../component/common/Input/Input';
import TextArea from '../../component/common/TextArea';
import useModal from '../../hook/UI/useModal';

const Staff = () => {
  const theme = useTheme();
  const [category, setCategory] = useState(
    localStorage.getItem('category') ?? '직장체험형 인턴',
  );
  const [isRecruiting, setIsRecruiting] = useState(
    localStorage.getItem('isRecruiting') ?? true,
  );
  const officeRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();
  const reasonRef = useRef();

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    officeRef.current.value = localStorage.getItem('office');
    addressRef.current.value = localStorage.getItem('address');
    emailRef.current.value = localStorage.getItem('eamil');
    reasonRef.current.value = localStorage.getItem('reason');
  };

  const modal = useModal({
    title: '저장되었습니다.',
    onOk: () => {},
  });

  const save = () => {
    localStorage.setItem('category', category);
    localStorage.setItem('isRecruiting', isRecruiting);
    localStorage.setItem('office', officeRef.current.value);
    localStorage.setItem('address', addressRef.current.value);
    localStorage.setItem('email', emailRef.current.value);
    localStorage.setItem('reason', reasonRef.current.value);
  };

  return (
    <S.Wrapper>
      {modal.render()}
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
                backgroundColor: !(category === '근로') && theme.colors.grey2,
              }}
              onClick={() => setCategory('근로')}
            >
              근로
            </Button>
            <Button
              style={{
                backgroundColor:
                  !(category === '직장체험형 인턴') && theme.colors.grey2,
              }}
              onClick={() => setCategory('직장체험형 인턴')}
            >
              직장체험형 인턴
            </Button>
          </div>
        </S.ContentWrapper>

        <S.ContentWrapper>
          <p style={{ fontSize: 20, fontWeight: 600 }}>모집 여부</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button
              style={{
                backgroundColor: !isRecruiting && theme.colors.grey2,
              }}
              onClick={() => setIsRecruiting(true)}
            >
              모집중
            </Button>
            <Button
              style={{
                backgroundColor: isRecruiting && theme.colors.grey2,
              }}
              onClick={() => setIsRecruiting(false)}
            >
              모집 완료
            </Button>
          </div>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <p style={{ fontSize: 20, fontWeight: 600 }}>학과/사무실 이름</p>
          <Input ref={officeRef} />
        </S.ContentWrapper>
        <S.ContentWrapper>
          <p style={{ fontSize: 20, fontWeight: 600 }}>주소</p>
          <Input ref={addressRef} />
        </S.ContentWrapper>
        <S.ContentWrapper>
          <p style={{ fontSize: 20, fontWeight: 600 }}>이메일</p>
          <Input ref={emailRef} />
        </S.ContentWrapper>
        <S.ContentWrapper>
          <p style={{ fontSize: 20, fontWeight: 600 }}>신청사유</p>
          <TextArea ref={reasonRef} />
        </S.ContentWrapper>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button style={{ width: 250 }} onClick={() => console.log('제출')}>
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
    justify-content: center;
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
