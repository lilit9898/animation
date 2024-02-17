import React from 'react';
import {StyledTimingFunction} from '../styles/TimingFunction.styled';
import {useAnimatedLayoutContext} from '../../context/AnimatedLayoutContext';
import {StyledContainer} from '../styles/ConfigContainer.styled';
import {StyledLabel} from '../styles/ConfigLabel.styled';

const TimingFunction = () => {
  const {setEasing, selectedElConfig} = useAnimatedLayoutContext();

  const handleEasingChange = (event) => {
    setEasing(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledLabel style={{fontSize: '11px', fontWeight: '700'}}>
        Easing
      </StyledLabel>
      <StyledTimingFunction
        value={selectedElConfig?.easing}
        onChange={handleEasingChange}
      >
        <option value='ease-in'>ease-in</option>
        <option value='ease-out'>ease-out</option>
        <option value='linear'>linear</option>
        <option value='ease-in-out'>ease-in-out</option>
        <option value='ease'>ease</option>
      </StyledTimingFunction>
    </StyledContainer>
  );
};

export default TimingFunction;
