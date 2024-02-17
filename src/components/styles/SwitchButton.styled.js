import styled from 'styled-components';

export const StyledSwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 12px;
`;

export const StyledSlider = styled.span`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 8px;
    width: 8px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

export const StyledInput = styled.input`
  display: none;

  &:checked + ${StyledSlider} {
    background-color: #2196f3;
  }

  &:checked + ${StyledSlider}:before {
    -webkit-transform: translateX(8px);
    -ms-transform: translateX(8px);
    transform: translateX(8px);
  }
`;
