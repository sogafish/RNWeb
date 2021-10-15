import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 300,
    width: 300,
  },
  text: {
    fontSize: 64,
  },
});

export const LoadingView: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Loading...</Text>
  </View>
);
