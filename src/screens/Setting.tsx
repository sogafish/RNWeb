import { SpaceView } from '@components/SpaceView';
import { COLORS } from '@constants/colors';
import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const emptyArr = [...Array(20)];
const items = emptyArr.map((_, index) => {
  const num = index + 1;
  return {
    id: index + 1,
    text: `item-${num}`,
  };
});

type Item = {
  id: number;
  text: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.WHITE,
  },
  item: {
    backgroundColor: COLORS.WHITE,
    width: '100%',
  },
  innerEmpty: {
    width: 20,
    height: 20,
  },
  itemInner: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: COLORS.GRAY,
  },
});

const ListItem: React.FC<{ item: Item; index: number }> = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemInner}>
        <Text>{item.text}</Text>
      </View>
    </View>
  );
};

const keyGen = (item: Item) => `setting-item-${item.id}`;

export const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyGen}
        data={items}
        renderItem={ListItem}
        ListHeaderComponent={<SpaceView size={20} />}
        ListFooterComponent={<SpaceView size={20} />}
      />
    </View>
  );
};
