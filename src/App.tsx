import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Platform,
} from 'react-native';
import { SpaceView } from './components';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.appContainer}>
      <SpaceView size={40} />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>working on {Platform.OS}.</Text>
    </SafeAreaView>
  );
};

export default App;
