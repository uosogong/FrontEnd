import styled from 'styled-components';
import { Content, Comment } from '../../component/feature/Detail';
import { useParams } from 'react-router-dom';

const Department = () => {
  const { id } = useParams();
  return (
    <S.Wrapper>
      <Content id={id} />
      <Comment id={id} />
    </S.Wrapper>
  );
};
export default Department;

const S = {
  Wrapper: styled.section`
    display: flex;
    width: 100%;
    padding: 100px 140px 6px 140px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  `,
};
