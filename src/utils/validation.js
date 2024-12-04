const validateField = (name, value, joinForm) => {
  switch (name) {
    case 'email':
      if (!value.trim()) {
        return '빈칸없이 입력해주세요';
      }
      const emailRegex = /^[a-zA-Z0-9._-]+@uos\.ac\.kr$/;
      return emailRegex.test(value)
        ? null
        : '학교 이메일을 입력해주세요 (uos.ac.kr)';

    case 'password':
      if (!value.trim()) {
        return '빈칸없이 입력해주세요';
      }
      return value.length >= 4 ? null : '비밀번호는 4글자 이상이어야 합니다';

    case 'confirmPwd':
      if (!value.trim()) {
        return '빈칸없이 입력해주세요';
      }
      return value === joinForm.password
        ? null
        : '비밀번호가 일치하지 않습니다';

    case 'name':
      if (!value.trim()) {
        return '빈칸없이 입력해주세요';
      }
      return null;

    case 'studentNum':
      if (!value.trim()) {
        return '빈칸없이 입력해주세요';
      }
      return value.length === 10 ? null : '학번을 10자리로 입력해주세요';

    case 'phoneNum':
      if (!value.trim()) {
        return '빈칸없이 입력해주세요';
      }
      const phoneRegex = /^[0-9]{11}$/;
      return phoneRegex.test(value)
        ? null
        : '전화번호는 11자리 숫자여야 합니다';

    case 'workCount':
      if (!value.trim()) {
        return '빈칸없이 입력해주세요';
      }
      if (parseInt(value) > 3) {
        return '직체 및 근로는 3회 이상 불가능합니다';
      }

    default:
      if (!value.trim()) {
        return '빈칸없이 입력해주세요';
      }
      return null;
  }
};

export default validateField;
