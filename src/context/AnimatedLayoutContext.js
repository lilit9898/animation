import React, { createContext, useState, useContext, useEffect } from 'react';

const AnimatedLayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [selected, setSelected] = useState('');
  const [selectedElConfig, setSelectedElConfig] = useState({});

  const [xValue, setXValue] = useState(selectedElConfig?.x || 0);
  const [yValue, setYValue] = useState(selectedElConfig?.y || 0);
  const [opacity, setOpacity] = useState(selectedElConfig?.opacity || 100);
  const [scale, setScale] = useState(selectedElConfig?.scale || 1);
  const [blur, setBlur] = useState(selectedElConfig?.blur || 5);
  const [delay, setDelay] = useState(selectedElConfig?.delay || 0);
  const [speed, setSpeed] = useState(selectedElConfig?.speed || 0);

  const [easing, setEasing] = useState(selectedElConfig?.easing || 'easy-in');
  const [replay, setReplay] = useState(1);

  const [start, setStart] = useState(false);

  useEffect(() => {
    const config = {
      x: xValue,
      y: yValue,
      opacity,
      scale,
      blur,
      speed,
      delay,
      easing,
    };
    setSelectedElConfig(config);
    localStorage.setItem(selected, JSON.stringify(config));
  }, [xValue, yValue, blur, opacity, scale, speed, delay, easing]);

  const setSelectedElConfigs = (elId) => {
    const selectedElementConfigs = JSON.parse(localStorage.getItem(elId));
    setSelected(elId == selected ? ' ' : elId);
    const defaultConfig = {
      x: 0,
      y: 0,
      opacity: 100,
      scale: 1,
      blur: 5,
      speed: 0,
      delay: 0,
      easing: 'easy-in',
      replay: false,
    };
    setSelectedElConfig(
      selectedElementConfigs ? selectedElementConfigs : defaultConfig
    );
  };

  return (
    <AnimatedLayoutContext.Provider
      value={{
        selected,
        setXValue,
        setYValue,
        setDelay,
        setSpeed,
        setScale,
        setBlur,
        setOpacity,
        setEasing,
        setReplay,
        replay,
        start,
        setStart,
        selectedElConfig,
        setSelected: setSelectedElConfigs,
      }}
    >
      {children}
    </AnimatedLayoutContext.Provider>
  );
};

export const useAnimatedLayoutContext = () => {
  return useContext(AnimatedLayoutContext);
};
