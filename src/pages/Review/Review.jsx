import { useEffect, useRef, useState } from 'react';
import Button from '../../component/common/Button/Button';
import { useTheme } from 'styled-components';
import Input from '../../component/common/Input/Input';
import TextArea from '../../component/common/TextArea';
import useModal from '../../hook/UI/useModal';
import startFilled from '../../assets/icon/start-filled.svg';
import startOutlined from '../../assets/icon/star-outline.svg';
import { S } from './style';
import { postFetcher } from '../../api/method';
import { useLocation, useNavigate } from 'react-router-dom';

const Review = () => {
  const theme = useTheme();
  const [starCount, setStarCount] = useState(5);
  const [intensity, setIntensity] = useState('널널함');
  const [mood, setMood] = useState('화목함');

  const reasonRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split('/')[2];

  const modal = useModal({
    title: '저장되었습니다.',
    onOk: () => {},
  });

  const INTENSITY_ENUM = {
    널널함: 'EASY',
    보통: 'NORMAL',
    바쁨: 'HARD',
  };

  const MOOD_ENUM = {
    화목함: 'HARMONY',
    엄격함: 'STRICT',
    유쾌함: 'PLEASANT',
    적막함: 'SILENCE',
  };

  const submit = async () => {
    try {
      await postFetcher(`/feedbacks/${id}`, {
        description: reasonRef.current.value,
        rating: starCount,
        busy: INTENSITY_ENUM[intensity],
        mood: MOOD_ENUM[mood],
      });
      navigate(`/department/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Wrapper>
      {modal.render()}

      <S.Continaer>
        <S.TextWrapper>
          <p style={{ fontSize: 28, fontWeight: 700 }}>
            직체/근로 후기를 남겨주세요💬
          </p>
          <S.SubText>총평을 별점으로 남겨주세요</S.SubText>
          <S.StartWrapper>
            {Array.from({ length: starCount }, (_, idx) => {
              return (
                <S.Star
                  src={startFilled}
                  onClick={() => setStarCount(idx + 1)}
                />
              );
            })}
            {Array.from({ length: 5 - starCount }, (_, idx) => {
              return (
                <S.Star
                  src={startOutlined}
                  onClick={() => setStarCount(idx + 1 + starCount)}
                />
              );
            })}
          </S.StartWrapper>
        </S.TextWrapper>
        <S.ContentWrapper>
          <p style={{ fontSize: 20, fontWeight: 600 }}>근무 강도는 어땠나요?</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button
              style={{
                width: 80,
                backgroundColor:
                  !(intensity === '널널함') && theme.colors.grey2,
              }}
              onClick={() => setIntensity('널널함')}
            >
              널널함
            </Button>
            <Button
              style={{
                backgroundColor: !(intensity === '보통') && theme.colors.grey2,
              }}
              onClick={() => setIntensity('보통')}
            >
              보통
            </Button>
            <Button
              style={{
                backgroundColor: !(intensity === '바쁨') && theme.colors.grey2,
              }}
              onClick={() => setIntensity('바쁨')}
            >
              바쁨
            </Button>
          </div>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <p style={{ fontSize: 20, fontWeight: 600 }}>
            사무실 분위기는 어떤가요?
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button
              style={{
                width: 80,
                backgroundColor: !(mood === '화목함') && theme.colors.grey2,
              }}
              onClick={() => setMood('화목함')}
            >
              화목함
            </Button>
            <Button
              style={{
                backgroundColor: !(mood === '엄격함') && theme.colors.grey2,
              }}
              onClick={() => setMood('엄격함')}
            >
              엄격함
            </Button>
            <Button
              style={{
                backgroundColor: !(mood === '유쾌함') && theme.colors.grey2,
              }}
              onClick={() => setMood('유쾌함')}
            >
              유쾌함
            </Button>
            <Button
              style={{
                backgroundColor: !(mood === '적막함') && theme.colors.grey2,
              }}
              onClick={() => setMood('적막함')}
            >
              적막함
            </Button>
          </div>
        </S.ContentWrapper>

        <S.ContentWrapper>
          <p style={{ fontSize: 20, fontWeight: 600 }}>
            근무 후기를 작성해주세요. 자세한 후기는 많은 도움이 됩니다 :)
          </p>
          <TextArea ref={reasonRef} />
        </S.ContentWrapper>
      </S.Continaer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
        }}
      >
        <S.SubText style={{ fontSize: 13 }}>
          더 많은 정보 공유를 위해 시대평에서는 후기에 대한 수정과 삭제가
          불가능합니다! 신중하게 작성부탁드립니다 :)
        </S.SubText>

        <Button style={{ width: 320 }} onClick={submit}>
          제출
        </Button>
      </div>
    </S.Wrapper>
  );
};
export default Review;
