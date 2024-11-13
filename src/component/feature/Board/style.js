import styled from 'styled-components';
const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 1280px;
  `,
  BoardBar: styled.div`
    width: 100%;
    height: 64px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,
  CheckBoxWrapper: styled.div`
    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;
  `,
  BoardWrapper: styled.div`
    display: flex;
    gap: 12px;
  `,
};

export default S;
