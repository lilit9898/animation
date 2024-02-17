import React from 'react';
import {StyledContent, StyledElementContainer, StyledMainElement, StyledTextContent} from './Content.styles';
import SideBar from '../SideBar/SideBar';
import {Title} from "../Title/Title";
import {Text} from "../Text/Text";
import {Button} from "../Button/Button";
import {Image} from "../Image/Image";

const Content = () => {
  return (
    <StyledContent>
      <StyledElementContainer>
        <StyledMainElement>
          <StyledTextContent>
            <Title/>
            <Text/>
            <Button/>
          </StyledTextContent>
          <Image/>
        </StyledMainElement>
      </StyledElementContainer>
      <SideBar/>
    </StyledContent>
  );
};

export default Content;
