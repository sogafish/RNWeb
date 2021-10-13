import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import { Navigator } from './navigator';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
