import React from 'react';
import {StyledBlur} from '../styles/Blur.styled';
import {useAnimatedLayoutContext} from '../../context/AnimatedLayoutContext';
import {StyledContainer} from '../styles/ConfigContainer.styled';
import {StyledLabel} from '../styles/ConfigLabel.styled';

const Blur = () => {
  const {setBlur, selectedElConfig} = useAnimatedLayoutContext();

  const handleBlurChange = (event) => {
    setBlur(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledLabel style={{fontSize: '11px', fontWeight: '700'}}>
        Blur
      </StyledLabel>
      <StyledBlur
        min={0}
        max={10}
        value={selectedElConfig?.blur}
        onChange={handleBlurChange}
      />
      <span style={{fontSize: '13px', fontWeight: '400'}}>
        {selectedElConfig?.blur}
      </span>
    </StyledContainer>
  );
};

export default Blur;
