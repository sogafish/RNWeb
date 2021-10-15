import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '@constants/screens';
import { FirstTabStack } from './First';
import { SecondTabStack } from './Second';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={SCREENS.FIRST}
        component={FirstTabStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={SCREENS.SECOND}
        component={SecondTabStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
