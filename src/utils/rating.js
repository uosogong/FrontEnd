import rating0 from '@assets/icon/rating0.svg';
import rating1 from '@assets/icon/rating1.svg';
import rating2 from '@assets/icon/rating2.svg';
import rating3 from '@assets/icon/rating3.svg';
import rating4 from '@assets/icon/rating4.svg';
import rating5 from '@assets/icon/rating5.svg';

const ratingUtil = (rate) => {
  const roundedRate = Math.round(rate);

  switch (roundedRate) {
    case 0:
      return rating0;
    case 1:
      return rating1;
    case 2:
      return rating2;
    case 3:
      return rating3;
    case 4:
      return rating4;
    case 5:
      return rating5;
    default:
      return rating0;
  }
};

export default ratingUtil;
