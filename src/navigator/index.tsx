import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SCREENS } from '@constants/screens';
import { Tabs } from './Tabs';
import { LoadingView } from '../components';

const config = {
  screens: {
    [SCREENS.FIRST]: 'first',
    [SCREENS.SECOND]: 'second',
    [SCREENS.HOME]: 'home',
    [SCREENS.MAIN]: 'main',
    [SCREENS.MY_PAGE]: 'my-page',
    [SCREENS.SETTING]: 'setting',
  },
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
