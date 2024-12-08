import styled, { css } from 'styled-components';

const BaseInput = css`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 20px;
  padding-left: 16px;
`;

export const S = {
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
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    & .err-meg {
      color: ${({ theme }) => theme.colors.error};
      font-size: 0.7rem;
      margin-left: 10px;
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
    gap: 10px;
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

    background-color: ${({ theme, variant, disabled }) =>
      disabled
        ? theme.colors.grey2
        : variant === 'temp_save'
          ? theme.colors.grey3
          : theme.colors.blue};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  `,
};
