import { ModalContainer, Description, ButtonWrap } from './Style';
import Button from '../Button/Button';

const Modal = ({
  isOpen,
  children,
  title,
  description,
  close,
  closable,
  okText,
  handleOkButtonClick,
}) => {
  return (
    <ModalContainer isOpen={isOpen}>
      {title && (
        <Description style={{ fontSize: 18, fontWeight: 500 }}>
          {title}
        </Description>
      )}
      {description && <Description>{description}</Description>}
      {children}
      <ButtonWrap>
        <Button onClick={handleOkButtonClick} style={{ width: 250 }}>
          확인
        </Button>
        {closable && <Button onClick={close}>취소</Button>}
      </ButtonWrap>
    </ModalContainer>
  );
};
export default Modal;
