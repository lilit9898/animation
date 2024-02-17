import React from 'react';
import {StyledOpacity} from '../styles/Opacity.styled';
import {useAnimatedLayoutContext} from '../../context/AnimatedLayoutContext';
import {StyledContainer} from '../styles/ConfigContainer.styled';
import {StyledLabel} from '../styles/ConfigLabel.styled';

const Opacity = () => {
  const {setOpacity, selectedElConfig} = useAnimatedLayoutContext();

  const handleOpacityChange = (event) => {
    setOpacity(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledLabel style={{fontSize: '11px', fontWeight: '700'}}>
        Opacity
      </StyledLabel>
      <StyledOpacity
        value={selectedElConfig?.opacity}
        onChange={handleOpacityChange}
      />
      <span style={{fontSize: '13px', fontWeight: '400'}}>
        {selectedElConfig?.opacity}%
      </span>
    </StyledContainer>
  );
};

export default Opacity;
