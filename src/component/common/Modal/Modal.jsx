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
        {closable && (
          <Button onClick={close} style={{ width: 250 }}>
            취소
          </Button>
        )}
        <Button onClick={handleOkButtonClick} style={{ width: 250 }}>
          {okText}
        </Button>
      </ButtonWrap>
    </ModalContainer>
  );
};
export default Modal;
