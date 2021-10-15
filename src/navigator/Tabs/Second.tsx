import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MyPageScreen, SettingScreen } from '@screens';
import { SCREENS } from '@constants/screens';

const Stack = createNativeStackNavigator();

export const SecondTabStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.MY_PAGE}>
      <Stack.Screen
        name={SCREENS.MY_PAGE}
        component={MyPageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={SCREENS.SETTING} component={SettingScreen} />
    </Stack.Navigator>
  );
};
