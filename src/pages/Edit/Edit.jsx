import Input from '../../component/common/Input/Input';
import Button from '../../component/common/Button/Button';
import S from './style';
import { EDIT_FORM } from '../../constants';
import { useUserEdit } from '../../hook';
import WithdrawModal from '../../component/feature/Edit/WithdrawModal';
import { useState } from 'react';

const Edit = () => {
  const {
    editFormRef,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    joinState,
    disabled,
  } = useUserEdit();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Wrapper>
      <h1>개인정보 수정</h1>
      <S.ButtonContainer>
        {EDIT_FORM.map((input, index) => {
          const field = input.info[0];
          const errorMessage = errors[field.name];

          return (
            <S.ButtonBox key={index}>
              <p>{input.label}</p>
              <Input
                {...field}
                defaultValue={editFormRef.current[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errorMessage ? 'err' : ''}
              />
              {errorMessage && <p className="err-meg">{errorMessage}</p>}
            </S.ButtonBox>
          );
        })}
        {isModalOpen && (
          <WithdrawModal isOpen={isModalOpen} close={handleCloseEditModal} />
        )}
        <Button type="submit" onClick={handleSubmit} disabled={disabled}>
          수정하기
        </Button>
        <Button className="btn_out" onClick={handleEditClick}>
          탈퇴하기
        </Button>
        {joinState && <p className="err-meg">{joinState}</p>}
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default Edit;
