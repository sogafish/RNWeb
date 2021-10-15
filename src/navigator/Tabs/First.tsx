import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@screens';
import { SCREENS } from '@constants/screens';

const Stack = createNativeStackNavigator();

export const FirstTabStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME}>
      <Stack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
