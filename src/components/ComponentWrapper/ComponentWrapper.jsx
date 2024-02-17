import { cloneElement } from 'react';
import { useAnimatedLayoutContext } from '../../context/AnimatedLayoutContext';
import { CloneElementStyle, ElementStyle } from './ComponentWrapper.styled';

export const ComponentWrapper = ({ children, id }) => {
  const { selected, start, selectedElConfig } = useAnimatedLayoutContext();
  const clonedElement = cloneElement(children);
  const isElSelected = selected === id;
  const storageElConfigs = JSON.parse(localStorage.getItem(id));

  return (
    <div style={{ position: 'relative', marginRight: 70 }}>
      <ElementStyle isElSelected={isElSelected}>{children}</ElementStyle>
      <CloneElementStyle
        isElSelected={isElSelected}
        selectedElConfig={selectedElConfig}
        storageElConfigs={storageElConfigs}
        start={start}
      >
        {clonedElement}
      </CloneElementStyle>
    </div>
  );
};
