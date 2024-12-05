import styled, { useTheme } from 'styled-components';
import Tag from '../../common/Tag';
import { useNavigate } from 'react-router-dom';
import useModal from '../../../hook/UI/useModal';
import ApplicantModal from '../ApplicantModal/ApplicantModal';

const ApplicantItem = ({ item }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const modal = useModal({
    title: '지원자 정보',
    closable: true,
    onOk: () => console.log('채용'),
  });
  return (
    <>
      {modal.render({ children: <ApplicantModal item={item} /> })}
      <S.ItemWrapper onClick={() => modal.open()}>
        <S.LeftWrapper>
          <S.MainContent>
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: theme.colors.blue,
              }}
            >
              {item.name}
            </p>
            <S.InfoWrapper>
              <p style={{ fontSize: 14, color: theme.colors.grey3 }}>
                학번 : {item.studentId}
              </p>
              <p style={{ fontSize: 14, color: theme.colors.grey3 }}>
                학과 : {item.department}
              </p>
              <p style={{ fontSize: 14, color: theme.colors.grey3 }}>
                전화번호 : {item.phoneNumber}
              </p>
            </S.InfoWrapper>
          </S.MainContent>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.ReviewContent>
            <p style={{ fontSize: 14 }}> 자세히 보기</p>

            <Tag content={item.tag} />
          </S.ReviewContent>
        </S.RightWrapper>
      </S.ItemWrapper>
    </>
  );
};

export default ApplicantItem;

const S = {
  ItemWrapper: styled.div`
  display:flex;
  justify-content:space-between;

  width: 470px;
  height: 120px;
  padding:15px; 20px;

  border: 1px solid ${(props) => props.theme.colors.grey1};
  border-radius: 10px;
  cursor:pointer;
`,
  MainContent: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
  `,
  LeftWrapper: styled.div`
    flex-grow: 8.5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `,
  RightWrapper: styled.div`
    flex-grow: 1.5;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    height: 100%;
  `,
  ReviewContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
  `,
  InfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
};
