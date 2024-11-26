import styled from 'styled-components';
import { useEffect } from 'react';

export const BlackScreen = ({ isOpen, onClick }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return <BlackScreenContainer isOpen={isOpen} onClick={onClick} />;
};

const BlackScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  opacity: ${(props) => (props.isOpen ? '0.5' : '0')};
  user-select: ${(props) => (props.isOpen ? 'auto' : 'none')};
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
`;
