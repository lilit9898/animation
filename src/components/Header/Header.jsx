import React from 'react';
import logo from '../../assets/images/Logo.svg';
import {StyledHeader, StyledPreviewButton} from './Header.styled';
import {useAnimatedLayoutContext} from '../../context/AnimatedLayoutContext';

const Header = () => {
  const {start, setStart} = useAnimatedLayoutContext();

  const handleAnimateClick = () => {
    setStart(!start);
  };

  return (
    <StyledHeader>
      <img
        src={logo}
        alt='logo'
        width={28}
        height={28}
        style={{padding: '15px 0px'}}
      />
      <StyledPreviewButton onClick={handleAnimateClick}>
        Preview
      </StyledPreviewButton>
    </StyledHeader>
  );
};

export default Header;
