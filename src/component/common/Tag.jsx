import styled, { useTheme } from 'styled-components';

const Tag = ({ content, activeState = true }) => {
  const theme = useTheme();
  return (
    <S.Wrapper activeState={activeState}>
      <p style={{ fontSize: 12, color: theme.colors.white }}>{content}</p>
    </S.Wrapper>
  );
};

export default Tag;

const S = {
  Wrapper: styled.div`
    padding: 6px 10px;
    border-radius: 5px;
    background-color: ${(props) =>
      !props.activeState ? props.theme.colors.grey2 : props.theme.colors.blue};
    width: fit-content;
  `,
};
