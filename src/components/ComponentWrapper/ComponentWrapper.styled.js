import styled, {css} from "styled-components";

export const ElementStyle = styled('div')(
  ({isElSelected}) => css`
    outline: ${isElSelected ? '2px solid blue' : 'none'};
  `
);

export const CloneElementStyle = styled('div')(
  ({isElSelected, selectedElConfig, storageElConfigs, start}) => css`
    left: ${isElSelected ? selectedElConfig?.x : storageElConfigs?.x || 0}px;
    top: ${isElSelected ? selectedElConfig?.y : storageElConfigs?.y || 0}px;
    display: ${start ? 'none' : 'block'};
    filter: blur(${isElSelected ? selectedElConfig?.blur : storageElConfigs?.blur}px);
    opacity: ${isElSelected ? selectedElConfig?.opacity : storageElConfigs?.opacity}%;
    transform: scale(${isElSelected ? selectedElConfig.scale : storageElConfigs?.transform});
    position: absolute;
    outline: ${isElSelected ? '2px dashed blue' : 'none'};
  `
);
