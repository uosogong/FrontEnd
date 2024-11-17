import Input from '../../component/common/Input/Input';
import Button from '../../component/common/Button/Button';
import S from './style';
import { JOIN_FORM } from '../../constants';
import { useSignUp } from '../../hook';

const SignUp = () => {
  const { joinForm, errors, handleChange, handleBlur, handleSubmit, disabled } =
    useSignUp();

  return (
    <S.Wrapper>
      <h1>회원가입</h1>
      <S.ButtonContainer>
        {JOIN_FORM.map((input, index) => {
          const field = input.info[0];
          const errorMessage = errors[field.name];

          return (
            <S.ButtonBox key={index}>
              <p>{input.label}</p>
              <Input
                {...field}
                value={joinForm[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errorMessage ? 'err' : ''}
              />
              {errorMessage && <p className="err-meg">{errorMessage}</p>}
            </S.ButtonBox>
          );
        })}
        <Button type="submit" onClick={handleSubmit} disabled={disabled}>
          회원가입
        </Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default SignUp;
