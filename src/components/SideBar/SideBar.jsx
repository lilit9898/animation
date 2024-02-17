import React from 'react';
import { StyledSideBar } from '../styles/Sidebar.styled';
import Axis from './Axis';
import Opacity from './Opacity';
import Scale from './Scale';
import Blur from './Blur';
import Speed from './Speed';
import Delay from './Delay';
import TimingFunction from './TimingFunction';
import Replay from './Replay';

const SideBar = () => {
  return (
    <StyledSideBar>
      <Axis />
      <Opacity />
      <Scale />
      <Blur />
      <Speed />
      <Delay />
      <TimingFunction />
      <Replay />
    </StyledSideBar>
  );
};

export default SideBar;
