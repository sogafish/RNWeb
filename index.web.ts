import { AppRegistry } from 'react-native';
// import { name as appName } from './app.json'; // todo json
import App from './src/App';

AppRegistry.registerComponent('RNWeb', () => App);

AppRegistry.runApplication('RNWeb', {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
