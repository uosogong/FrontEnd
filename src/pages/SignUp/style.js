import styled from 'styled-components';

const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5% 0;
    gap: 2rem;
    color: ${({ theme }) => theme.colors.blue};

    & h1 {
      font-size: 2rem;
      font-weight: 600;
    }
  `,

  ButtonContainer: styled.form`
    display: flex;
    flex-direction: column;
    width: 31%;
    gap: 1rem;

    & button {
      margin-top: 1.5rem;
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
      color: ${({ theme }) => theme.colors.error};
      font-size: 0.7rem;
    }
  `,
};

export default S;
