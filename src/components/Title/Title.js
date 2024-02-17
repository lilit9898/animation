import {StyledTitle} from "./Title.styled";
import React from "react";
import {useAnimatedLayoutContext} from "../../context/AnimatedLayoutContext";
import {ComponentWrapper} from "../ComponentWrapper/ComponentWrapper";

export const Title = () => {
  const {
    selected,
    setSelected,
    selectedElConfig,
    replay,
    start,
  } = useAnimatedLayoutContext();

  const isElSelected = selected === 'title'

  return (
    <ComponentWrapper id={'title'}>
      <StyledTitle
        onClick={() => setSelected('title')}
        animationconfig={selectedElConfig}
        replay={replay}
        start={start}
        isElSelected={isElSelected}
      >
        Animation Settings
      </StyledTitle>
    </ComponentWrapper>

  )
}
