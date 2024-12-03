import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { unEditableForm, gridInputs } from '../../constants/mocks/apply';

const DepartmentApply = () => {
  const location = useLocation();
  const pageTitle = location.state || '지원서';

  return (
    <S.Wrapper>
      <S.Layout>
        <h1>{`${pageTitle}지원서 작성 페이지`}</h1>
        <S.Content>
          <div></div>
          <S.UnEditField>
            {unEditableForm.map((form) => (
              <S.Form>
                <label>{form.label}</label>
                <S.UnEditableInput>{form.content}</S.UnEditableInput>
              </S.Form>
            ))}
          </S.UnEditField>
          <S.InputField>
            <S.Form>
              <label>연락처</label>
              <S.Input placeholder="연락처를 입력해주세요" />
            </S.Form>
            <S.Form>
              <label>주소</label>
              <S.Input placeholder="주소를 입력해주세요" />
            </S.Form>
            <S.GridInput>
              {gridInputs.map(({ label, placeholder }) => (
                <S.GridInputItem key={label}>
                  <label>{label}</label>
                  <S.Input placeholder={placeholder} />
                </S.GridInputItem>
              ))}
            </S.GridInput>
            <S.Form>
              <label>이메일</label>
              <S.Input placeholder="이메일을 입력해주세요" />
            </S.Form>
            <S.Form>
              <label>지원동기</label>
              <S.Textarea placeholder="신청사유를 입력해주세요" />
            </S.Form>
          </S.InputField>
          <S.Buttons>
            <S.Button>다음</S.Button>
            <S.Button variant="temp_save">임시저장</S.Button>
          </S.Buttons>
        </S.Content>
      </S.Layout>
    </S.Wrapper>
  );
};

export default DepartmentApply;

const BaseInput = css`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 20px;
  padding-left: 16px;
`;

const S = {
  Wrapper: styled.section`
    display: flex;
    width: 100%;
    padding: 30px 140px 6px 140px;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    & label {
      color: #000;
      font-family: inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `,

  Layout: styled.main`
    display: flex;
    width: 50%;
    padding: 10px 0px;
    flex-direction: column;
    align-items: flex-start;

    & h1 {
      color: ${({ theme }) => theme.colors.black};
      font-family: inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 20px;
    }
  `,

  Content: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,

  UnEditField: styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 45px;
    width: 100%;
  `,

  Form: styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,

  Textarea: styled.textarea`
    ${BaseInput}
    height: 150px;
    padding: 15px;
    resize: none;
  `,

  UnEditableInput: styled.div`
    display: flex;
    padding: 1px 0 0 15px;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    background-color: #eeeeee;
    border-radius: 20px;
    height: 40px;
    align-items: center;
  `,

  InputField: styled.section`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  Input: styled.input`
    ${BaseInput}
    height: 40px;
  `,

  GridInput: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 25px;
    width: 100%;
  `,

  GridInputItem: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,

  Buttons: styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
  `,

  Button: styled.button`
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    width: 40%;
    height: 35px;

    background-color: ${({ theme, variant }) =>
      variant === 'temp_save' ? theme.colors.grey2 : theme.colors.blue};
  `,
};
