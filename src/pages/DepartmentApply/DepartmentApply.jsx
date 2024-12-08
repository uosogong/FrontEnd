import { S } from './style';
import { unEditableForm, gridInputs } from '../../constants/mocks/apply';
import useApply from '../../hook/useApply';

const DepartmentApply = () => {
  const {
    isFormValid,
    handleBlur,
    handleTempSave,
    handleSubmit,
    handleChange,
    errors,
    applyForm,
    pageTitle,
    uneditableData,
  } = useApply();

  return (
    <S.Wrapper>
      <S.Layout>
        <h1>{`${pageTitle}지원서 작성 페이지`}</h1>
        <S.Content>
          <div></div>
          <S.UnEditField>
            {unEditableForm.map((form) => (
              <S.Form>
                <label>{form.label}</label>
                <S.UnEditableInput>
                  {uneditableData[form.key]}
                </S.UnEditableInput>
              </S.Form>
            ))}
          </S.UnEditField>
          <S.InputField>
            <S.Form>
              <label>연락처</label>
              <S.Input
                name="phone"
                placeholder="연락처를 입력해주세요"
                onChange={handleChange}
                value={applyForm['phone']}
                onBlur={handleBlur}
              />
              {errors.phone && <p className="err-meg ">{errors.phone}</p>}
            </S.Form>
            <S.Form>
              <label>주소</label>
              <S.Input
                name="address"
                placeholder="주소를 입력해주세요"
                onChange={handleChange}
                value={applyForm['address']}
                onBlur={handleBlur}
              />
              {errors.address && <p className="err-meg ">{errors.address}</p>}
            </S.Form>
            <S.GridInput>
              {gridInputs.map(({ label, placeholder, name }) => (
                <S.GridInputItem key={label}>
                  <label>{label}</label>
                  <S.Input
                    placeholder={placeholder}
                    onChange={handleChange}
                    name={name}
                    value={applyForm[name]}
                    onBlur={handleBlur}
                  />
                  {errors[name] && <p className="err-meg ">{errors[name]}</p>}
                </S.GridInputItem>
              ))}
            </S.GridInput>
            <S.Form>
              <label>이메일</label>
              <S.Input
                name="email"
                placeholder="이메일을 입력해주세요"
                onChange={handleChange}
                value={applyForm['email']}
                onBlur={handleBlur}
              />
              {errors.email && <p className="err-meg ">{errors.email}</p>}
            </S.Form>
            <S.Form>
              <label>지원동기</label>
              <S.Textarea
                name="content"
                placeholder="신청사유를 입력해주세요"
                onChange={handleChange}
                value={applyForm['content']}
                onBlur={handleBlur}
              />
              {errors.content && <p className="err-meg ">{errors.content}</p>}
            </S.Form>
          </S.InputField>
          <S.Buttons>
            <S.Button
              type="submit"
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              다음
            </S.Button>
            <S.Button variant="temp_save" onClick={handleTempSave}>
              임시저장
            </S.Button>
          </S.Buttons>
        </S.Content>
      </S.Layout>
    </S.Wrapper>
  );
};

export default DepartmentApply;
