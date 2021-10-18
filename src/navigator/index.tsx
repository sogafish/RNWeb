import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SCREEN_PATH_MAPS } from '@constants/screens';
import { Tabs } from './Tabs';
import { LoadingView } from '../components';

const config = {
  screens: SCREEN_PATH_MAPS,
};

const linking = {
  prefixes: ['', 'myApp://'],
  config,
};

export const Navigator = () => {
  return (
    <NavigationContainer linking={linking} fallback={<LoadingView />}>
      <Tabs />
    </NavigationContainer>
  );
};
