import React from 'react';
import { View } from 'react-native';

type Props = {
  size: number;
};

export const SpaceView: React.FC<Props> = props => (
  <View style={{ height: props.size }} />
);
