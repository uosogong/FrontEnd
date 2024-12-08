import styled from 'styled-components';

const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4% 0;
    gap: 2rem;
    color: ${({ theme }) => theme.colors.blue};

    & h1 {
      font-size: 2rem;
      font-weight: 600;
    }
    & .err-meg {
      display: flex;
      color: ${({ theme }) => theme.colors.error};
      font-size: 1rem;
      justify-content: center;
    }
  `,

  ButtonContainer: styled.form`
    display: flex;
    flex-direction: column;
    width: 31%;
    gap: 1rem;

    & button.btn_out {
      background-color: ${({ theme }) => theme.colors.grey3};
    }
  `,

  ButtonBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    & > p {
      margin-left: 0.8rem;
    }

    & .err {
      border: 1.5px solid ${({ theme }) => theme.colors.error};
    }
    & .err-meg {
      font-size: 0.7rem;
      justify-content: flex-start;
    }
  `,
};

export default S;
