import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { SCREENS } from '../constants/screens';
import { decrement, increment } from '../reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    width: 32,
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIncr: {
    backgroundColor: 'blue',
    marginRight: 10,
  },
  buttonDecr: {
    backgroundColor: 'red',
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
  },
});

export const HomeScreen = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());
  const goToSettingScreen = () => navigation.navigate(SCREENS.SETTING);

  return (
    <View style={styles.container}>
      <Text>Home Screen on {Platform.OS}</Text>
      <Text>count:{count}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={onIncrement}
          style={[styles.button, styles.buttonIncr]}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onDecrement}
          style={[styles.button, styles.buttonDecr]}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={goToSettingScreen} title="to Setting" />
    </View>
  );
};
