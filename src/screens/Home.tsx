import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());

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
    </View>
  );
};
