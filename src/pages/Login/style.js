import styled from 'styled-components';

const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 13% 0;
    gap: 2rem;
  `,

  ButtonContainer: styled.form`
    display: flex;
    flex-direction: column;
    width: 31%;
    gap: 0.6rem;
  `,

  LoginNav: styled.nav`
    display: flex;
    width: 25%;
    justify-content: space-evenly;
    color: ${(props) => props.theme.colors.grey3};

    & p {
      margin: 0 1rem;
      font-weight: 900;
    }
  `,
};

export default S;
