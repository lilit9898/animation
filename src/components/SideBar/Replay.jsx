import React from 'react';
import {
  StyledSwitchContainer,
  StyledInput,
  StyledSlider,
} from '../styles/SwitchButton.styled';
import { StyledContainer } from '../styles/ConfigContainer.styled';
import { StyledLabel } from '../styles/ConfigLabel.styled';
import { useAnimatedLayoutContext } from '../../context/AnimatedLayoutContext';

const Replay = () => {
  const { replay, setReplay } = useAnimatedLayoutContext();

  const handleSwitchChange = () => {
    setReplay(!replay);
  };

  return (
    <StyledContainer>
      <StyledLabel style={{ fontSize: '11px', fontWeight: '700' }}>
        Replay
      </StyledLabel>
      <StyledSwitchContainer>
        <StyledInput
          type='checkbox'
          checked={replay}
          onChange={handleSwitchChange}
        />
        <StyledSlider />
      </StyledSwitchContainer>
    </StyledContainer>
  );
};

export default Replay;
