import styled, {css, keyframes} from "styled-components";

const slideAnimation = ({animationconfig}) => keyframes`
  from {
  }
  to {
    transform: translate(${animationconfig?.x}px, ${animationconfig?.y}px) scale(${animationconfig?.scale});
    opacity: ${animationconfig?.opacity};
    filter: blur(${animationconfig?.blur}px);
  }
`;

export const AnimatedElement = styled('div')(
  ({isElSelected, animationconfig, start, replay}) => css`
    animation: ${isElSelected && start ? slideAnimation({animationconfig}) : 'none'};
    animation-duration: ${animationconfig?.speed}s;
    animation-delay: ${animationconfig?.delay}s;
    animation-timing-function: ${animationconfig?.easing};
    animation-iteration-count: ${replay ? 'infinite' : 1};
  `
);
