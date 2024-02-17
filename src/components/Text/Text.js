import {StyledText} from "./Text.styled";
import React from "react";
import {useAnimatedLayoutContext} from "../../context/AnimatedLayoutContext";
import {ComponentWrapper} from "../ComponentWrapper/ComponentWrapper";

export const Text = () => {
  const {
    selected,
    setSelected,
    selectedElConfig,
    replay,
    start,
  } = useAnimatedLayoutContext();

  const isElSelected = selected === 'text'

  return (
    <ComponentWrapper id={'text'}>
      <StyledText
        onClick={() => setSelected('text')}
        animationconfig={selectedElConfig}
        replay={replay}
        start={start}
        isElSelected={isElSelected}
      >
        The user should have the option to select any element on the page and set
        up its animation using the controls in the right panel. A dotted line will
        show the element's position and state before the animation begins, giving
        the user a clear idea of how the animation will appear. The preview button
        on the top panel will open the result in a new tab.
      </StyledText>
    </ComponentWrapper>

  )
}
