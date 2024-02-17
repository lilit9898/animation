import styled from 'styled-components';

export const StyledOpacity = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  width: 118px;
  background: linear-gradient(
    to right,
    rgba(175, 175, 175, 1) 0%,
    rgba(175, 175, 175, 1) ${(props) => props.value}%,
    rgba(224, 224, 224, 1) ${(props) => props.value}%,
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
