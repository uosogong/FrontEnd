import S from './style';
import { useTheme } from 'styled-components';
const LeftCategoryBar = ({ dropdown, checkbox }) => {
  const theme = useTheme();
  return (
    <div style={{ position: 'absolute', display: 'flex', gap: 10, left: 0 }}>
      <S.CheckBoxWrapper>
        {checkbox.render()}
        <p style={{ fontSize: 16, color: theme.colors.grey4 }}>모집중</p>
      </S.CheckBoxWrapper>
      {dropdown.render()}
    </div>
  );
};

export default LeftCategoryBar;
