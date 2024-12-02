import styled from 'styled-components';
const S = {
  DropdownWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    position: relative;
    justify-content: center;
    cursor: pointer;
  `,
  DropdownToggle: styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;

    padding: 8px;
    border: 1.5px solid ${(props) => props.theme.colors.grey2};
    border-radius: 4px;
  `,
  DropdownItems: styled.ul`
    position: absolute;
    top: 50px;

    padding: 8px;
    border: 1.5px solid ${(props) => props.theme.colors.grey2};
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    gap: 10px;

    background-color: ${({ theme }) => theme.colors.white};
  `,
  DropdownItem: styled.li`
    padding: 8px;
    border-radius: 2px;
    text-align: center;
    white-space: nowrap;
    &:hover {
      background: ${(props) => props.theme.colors.grey2};
    }
  `,
};

export default S;
