import { useTheme } from 'styled-components';
import S from './Dropdown.style';
import toggleIcon from '@assets/icon/toggle.svg';

const Dropdown = ({ isOpen, items, toggle, selectedItem, clickItem }) => {
  const theme = useTheme();
  return (
    <S.DropdownWrapper>
      <S.DropdownToggle onClick={toggle}>
        <p style={{ fontSize: 16, color: theme.colors.grey4 }}>
          {selectedItem}
        </p>
        <img src={toggleIcon} alt="토글아이콘" width={10} height={10} />
      </S.DropdownToggle>
      {isOpen && (
        <S.DropdownItems>
          {items.map((item, i) => (
            <S.DropdownItem key={i} onClick={() => clickItem(item)}>
              {item}
            </S.DropdownItem>
          ))}
        </S.DropdownItems>
      )}
    </S.DropdownWrapper>
  );
};

export default Dropdown;
