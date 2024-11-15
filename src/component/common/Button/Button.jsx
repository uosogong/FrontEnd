import S from './Button.style';

const Button = ({ children, disabled = false, ...props }) => {
  return (
    <S.button {...props} disabled={disabled}>
      {children}
    </S.button>
  );
};

export default Button;
