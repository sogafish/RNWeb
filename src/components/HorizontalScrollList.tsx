import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  item: {
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

const mockData = [
  {
    id: 1,
    color: 'red',
  },
  {
    id: 2,
    color: 'yellow',
  },
  {
    id: 3,
    color: 'white',
  },
  {
    id: 4,
    color: 'lightblue',
  },
  {
    id: 5,
    color: 'lightgreen',
  },
];

type Item = {
  id: number;
  color: string;
};

const keyGen = (item: Item) => `HorizontalScroll-${item.id}`;

const Item = ({ item }: { item: Item }) => (
  <View style={[styles.item, { backgroundColor: item.color }]}>
    <Text>{item.id}</Text>
  </View>
);

export const HorizontalScrollList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyGen}
        data={mockData}
        renderItem={Item}
        horizontal
      />
    </View>
  );
};
