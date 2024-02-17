import React from 'react';
import {StyledScale} from '../styles/Scale.styled';
import {useAnimatedLayoutContext} from '../../context/AnimatedLayoutContext';
import {StyledContainer} from '../styles/ConfigContainer.styled';
import {StyledLabel} from '../styles/ConfigLabel.styled';

const Scale = () => {
  const {setScale, selectedElConfig} = useAnimatedLayoutContext();

  const handleScaleChange = (event) => {
    setScale(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledLabel style={{fontSize: '11px', fontWeight: '700'}}>
        Scale
      </StyledLabel>
      <StyledScale
        value={selectedElConfig?.scale}
        min={0}
        max={2}
        step={0.1}
        onChange={handleScaleChange}
      />
      <span style={{fontSize: '13px', fontWeight: '400'}}>
        {selectedElConfig?.scale}
      </span>
    </StyledContainer>
  );
};

export default Scale;
