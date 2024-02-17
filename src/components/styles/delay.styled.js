import styled from 'styled-components';

export const StyledDelay = styled.input.attrs({ type: 'range' })`
  min: 0;
  max: 10;
  -webkit-appearance: none;
  background: linear-gradient(
    to right,
    rgba(175, 175, 175, 1) 0%,
    rgba(175, 175, 175, 1) ${(props) => (props.value / 10) * 100}%,
    rgba(224, 224, 224, 1) ${(props) => (props.value / 10) * 100}%,
    rgba(224, 224, 224, 1) 100%
  );
  height: 2px;
  outline: none;

  min: 1;
  max: 100;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(175, 175, 175, 1);
    background: white;
    cursor: pointer; /* Add a cursor on hover */
    border-radius: 50%;
  }
`;
