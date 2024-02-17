import {StyledImage} from "./Image.styled";
import React from "react";
import {useAnimatedLayoutContext} from "../../context/AnimatedLayoutContext";
import {AnimatedElement} from "../AnimatedElement/AnimatedElement.styled";
import imgexm from "../../assets/images/imgexm.png";
import {ComponentWrapper} from "../ComponentWrapper/ComponentWrapper";

export const Image = () => {
  const {
    selected,
    setSelected,
    selectedElConfig,
    replay,
    start,
  } = useAnimatedLayoutContext();

  const isElSelected = selected === 'image'

  return (
    <ComponentWrapper id={'image'}>
      <AnimatedElement
        onClick={() => setSelected('image')}
        animationconfig={selectedElConfig}
        replay={replay}
        start={start}
        isElSelected={isElSelected}
      >
        <StyledImage
          src={imgexm}
          alt='img'
        />
      </AnimatedElement>
    </ComponentWrapper>

  )
}
