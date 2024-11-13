import styled, { useTheme } from 'styled-components';

const Tag = ({ content }) => {
  const theme = useTheme();
  return (
    <S.Wrapper>
      <p style={{ fontSize: 12, color: theme.colors.white }}>{content}</p>
    </S.Wrapper>
  );
};

export default Tag;

const S = {
  Wrapper: styled.div`
    padding: 5px 8px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.blue};
    width: fit-content;
  `,
};
