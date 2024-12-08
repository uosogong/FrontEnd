import { useState } from 'react';
import Dropdown from '../../component/common/Dropdown/Dropdown';

const useDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(title);

  const reset = () => setSelectedItem(title);

  const toggle = () => setIsOpen((prev) => !prev);

  const clickItem = (item) => {
    setSelectedItem(item);
    toggle();
  };

  const render = () => {
    return (
      <Dropdown
        isOpen={isOpen}
        items={items}
        toggle={toggle}
        selectedItem={selectedItem}
        clickItem={clickItem}
      />
    );
  };

  return { selectedItem, toggle, render, reset };
};
export default useDropdown;
