const EDIT_FORM = [
  {
    label: '이메일',
    info: [{ type: 'text', placeholder: '이메일을 입력하세요', name: 'email' }],
  },
  {
    label: '비밀번호',
    info: [
      {
        type: 'password',
        placeholder: '비밀번호를 입력하세요',
        name: 'password',
      },
    ],
  },
  {
    label: '비밀번호 확인',
    info: [
      {
        type: 'password',
        placeholder: '비밀번호를 입력하세요',
        name: 'confirmPwd',
      },
    ],
  },
  {
    label: '이름',
    info: [
      {
        type: 'text',
        placeholder: '이름을 입력하세요',
        name: 'name',
      },
    ],
  },

  {
    label: '전회번호',
    info: [
      {
        type: 'text',
        placeholder: '01012345678',
        name: 'phoneNum',
      },
    ],
  },
  {
    label: '학과',
    info: [
      {
        type: 'text',
        placeholder: '00 학과 / 00 학부',
        name: 'departmentName',
      },
    ],
  },
  {
    label: '생년월일',
    info: [
      {
        type: 'text',
        placeholder: '생년월일8자리를 입력해주세요',
        name: 'birthDay',
      },
    ],
  },
];

export default EDIT_FORM;
