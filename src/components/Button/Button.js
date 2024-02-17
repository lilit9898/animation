import {StyledButton} from "./Button.styled";
import React from "react";
import {useAnimatedLayoutContext} from "../../context/AnimatedLayoutContext";
import {AnimatedElement} from "../AnimatedElement/AnimatedElement.styled";
import {ComponentWrapper} from "../ComponentWrapper/ComponentWrapper";

export const Button = () => {
  const {
    selected,
    setSelected,
    selectedElConfig,
    replay,
    start,
  } = useAnimatedLayoutContext();

  const isElSelected = selected === 'button'

  return (
    <ComponentWrapper id={'button'}>
      <AnimatedElement
        onClick={() => setSelected('button')}
        animationconfig={selectedElConfig}
        replay={replay}
        start={start}
        isElSelected={isElSelected}
      >
        <StyledButton>
          Button
        </StyledButton>
      </AnimatedElement>
    </ComponentWrapper>

  )
}
