import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 40,
    backgroundColor: COLORS.MAIN,
  },
  text: {
    fontSize: 20,
    color: COLORS.WHITE,
  },
});

type Props = {
  text: string;
  onPress: () => void;
};

export const Button: React.VFC<Props> = props => {
  const { text, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
