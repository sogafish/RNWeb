import * as React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SCREENS } from '@constants/screens';
import { Button, SpaceView } from '../components';
import { showAlert } from '../utils/alert';
import IMG from '../../assets/jiba.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    aspectRatio: 1,
  },
});

export const MyPageScreen = () => {
  const navigation = useNavigation();
  const toSetting = () => navigation.navigate(SCREENS.SETTING);
  const onPressAlert = () => {
    showAlert({ title: 'title!', msg: 'this is alertMessage' });
  };

  return (
    <View style={styles.container}>
      <Text>MyPage</Text>
      <SpaceView size={20} />
      <Image source={IMG} style={styles.image} />
      <SpaceView size={20} />
      <Button onPress={toSetting} text="Setting" />
      <SpaceView size={16} />
      <Button onPress={onPressAlert} text="Alert" />
    </View>
  );
};
