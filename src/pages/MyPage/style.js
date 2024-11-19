import styled from 'styled-components';

const S = {
  Wrapper: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7rem 0;
    gap: 2.5rem;
  `,

  TopContainer: styled.section`
    display: flex;
    gap: 3rem;
    align-items: center;

    & i {
      width: 11rem;
    }

    & h1 {
      font-family: Inter;
      font-size: 2.5rem;
      font-weight: 600;
      line-height: normal;
    }

    & h2 {
      font-family: Inter;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: normal;
    },

  `,
  BottomContainer: styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 375px;
  `,

  Button: styled.button`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1.4rem;
    border-radius: 1.2rem;
    border: 1px solid ${({ theme }) => theme.colors.black};

    & p {
      font-family: Inter;
      font-size: 20px;
      font-weight: 400;
      line-height: normal;
    }
  `,

  ButtonIcon: styled.p`
    font-size: 1.5rem;
  `,

  ArrowIcon: styled.img`
    width: 0.7rem;
  `,
};

export default S;
