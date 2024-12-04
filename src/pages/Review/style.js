import styled from 'styled-components';
export const S = {
  Wrapper: styled.div`
    padding-top: 90px;
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  `,
  Continaer: styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;

    gap: 80px;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  SubText: styled.div`
    color: ${(props) => props.theme.colors.grey4};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  StartWrapper: styled.div`
    display: flex;
    gap: 5px;
  `,
  Star: styled.img`
    width: 28px;
    height: 28px;
    cursor: pointer;
  `,
};
