import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Setting a timer for a long period of time',
  'YellowBox has been replaced with LogBox',
  'source.uri should not be an empty string'
]);

export default from './src/LivrosApp';