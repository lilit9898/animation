import React from 'react';
import { StyledXaxis } from '../styles/Xaxis.styled';
import { useAnimatedLayoutContext } from '../../context/AnimatedLayoutContext';
import { StyledYaxis } from '../styles/Yaxis.styled';
import { StyledContainer } from '../styles/ConfigContainer.styled';
import { StyledLabel } from '../styles/ConfigLabel.styled';

const Axis = () => {
  const { setXValue, setYValue, selectedElConfig } = useAnimatedLayoutContext();

  const handleXAxisChange = (event) => {
    setXValue(event.target.value);
  };

  const handleYAxisChange = (event) => {
    setYValue(event.target.value);
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <StyledContainer>
        <StyledLabel style={{ fontSize: '11px', fontWeight: '700' }}>
          X
        </StyledLabel>
        <StyledXaxis
          value={selectedElConfig?.x}
          onChange={handleXAxisChange}
          min={-100}
          max={100}
        />
        <span style={{ fontSize: '13px', fontWeight: '400' }}>
          {selectedElConfig?.x}
        </span>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel style={{ fontSize: '11px', fontWeight: '700' }}>
          Y
        </StyledLabel>
        <StyledYaxis
          value={selectedElConfig?.y}
          onChange={handleYAxisChange}
          min={-100}
          max={100}
        />
        <span style={{ fontSize: '13px', fontWeight: '400' }}>
          {selectedElConfig?.y}
        </span>
      </StyledContainer>
    </div>
  );
};

export default Axis;
