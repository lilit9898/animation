import React from 'react';
import {StyledDelay} from '../styles/delay.styled';
import {useAnimatedLayoutContext} from '../../context/AnimatedLayoutContext';
import {StyledContainer} from '../styles/ConfigContainer.styled';
import {StyledLabel} from '../styles/ConfigLabel.styled';

const Delay = () => {
  const {setDelay, selectedElConfig} = useAnimatedLayoutContext();

  const handleDelayChange = (event) => {
    setDelay(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledLabel style={{fontSize: '11px', fontWeight: '700'}}>
        Delay
      </StyledLabel>
      <StyledDelay
        min={0}
        max={10}
        step={0.1}
        value={selectedElConfig?.delay}
        onChange={handleDelayChange}
      />
      <span style={{fontSize: '13px', fontWeight: '400'}}>
        {selectedElConfig?.delay}s
      </span>
    </StyledContainer>
  );
};

export default Delay;
