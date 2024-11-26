import S from './Navigation.style';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../../constants';

const Navigation = () => {
  const [pressed, setPressed] = useState(0);

  const handleLinkClick = (index) => {
    setPressed(index);
  };

  return (
    <S.NavWrapper>
      <S.NavContainer>
        {NAVIGATION_ITEMS.map(({ text, path }, index) => (
          <NavLink
            key={index}
            to={`/${path}`}
            onMouseDown={() => handleLinkClick(index)}
            className={pressed === index ? 'pressed' : ''}
          >
            {text}
          </NavLink>
        ))}
      </S.NavContainer>
    </S.NavWrapper>
  );
};

export default Navigation;
