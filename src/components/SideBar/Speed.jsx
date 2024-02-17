import React from 'react';
import {StyledSpeed} from '../styles/Speed.styled';
import {useAnimatedLayoutContext} from '../../context/AnimatedLayoutContext';
import {StyledContainer} from '../styles/ConfigContainer.styled';
import {StyledLabel} from '../styles/ConfigLabel.styled';

const Speed = () => {
  const {setSpeed, selectedElConfig} = useAnimatedLayoutContext();

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledLabel style={{fontSize: '11px', fontWeight: '700'}}>
        Speed
      </StyledLabel>
      <StyledSpeed
        min={0}
        max={10}
        value={selectedElConfig?.speed}
        onChange={handleSpeedChange}
      />
      <span style={{fontSize: '13px', fontWeight: '400'}}>
        .{selectedElConfig?.speed}s
      </span>
    </StyledContainer>
  );
};

export default Speed;
