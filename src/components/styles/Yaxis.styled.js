import styled from 'styled-components';

export const StyledYaxis = styled.input.attrs({ type: 'range' })`
  min: -100;
  max: 100;
  -webkit-appearance: none;
  width: 118px;
  background: linear-gradient(
    ${(props) => (props.value <= 0 ? 'to left' : 'to right')},
    rgba(224, 224, 224, 1) 50%,
    ${(props) =>
        props.value <= 0 ? 'rgba(175, 175, 175, 1)' : 'rgba(175, 175, 175, 1)'}
      50%,
    ${(props) =>
        props.value <= 0 ? 'rgba(175, 175, 175, 1)' : 'rgba(175, 175, 175, 1)'}
      ${(props) => 50 + Math.abs(props.value) / 2}%,
    rgba(224, 224, 224, 1) ${(props) => 50 + Math.abs(props.value) / 2}%
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
