import styled from 'styled-components';

const S = {
  NavWrapper: styled.section`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    box-shadow: 0px 4px 10px ${({ theme }) => theme.colors.grey2};
  `,

  NavContainer: styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1rem;
    padding: 1.3rem 1rem;

    gap: 2.5rem;
    & a {
      color: ${({ theme }) => theme.colors.grey3};
      text-align: center;
      font-family: Inter;
      font-size: 1.2rem;
      font-weight: 600;
      line-height: normal;
    }

    & a.pressed {
      color: ${({ theme }) => theme.colors.blue};
    }
  `,
};

export default S;
