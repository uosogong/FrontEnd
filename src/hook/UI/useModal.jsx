import styled from 'styled-components';
import { useState } from 'react';
import { BlackScreen } from '../../component/common/BlackScreen/BlackScreen';
import Modal from '../../component/common/Modal/Modal';

const useModal = ({
  title,
  description,
  cancelText,
  okText,
  onOk,
  closable,
}) => {
  const [isOpen, setIsOpen] = useState();
  const open = () => setIsOpen(true);
  const close = () => {
    setIsPending(false);
    setIsOpen(false);
  };
  const [isPending, setIsPending] = useState(false);
  const render = ({ children = null } = {}) => {
    const handleOkButtonClick = () => {
      if (cancelText === '' || isPending) {
        return;
      }
      setIsPending(true);
      onOk();
      close();
    };
    return (
      <ModalWrapper isOpen={isOpen}>
        <BlackScreen isOpen={isOpen} onClick={close} />
        <Modal
          isOpen={isOpen}
          title={title}
          description={description}
          cancelText={cancelText}
          okText={okText}
          handleOkButtonClick={handleOkButtonClick}
          closable={closable}
          hide={close}
        >
          {children}
        </Modal>
      </ModalWrapper>
    );
  };
  return { open, close, render };
};

export default useModal;

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  ${(props) => !props.isOpen && 'opacity:0;pointer-events: none;'}
`;
