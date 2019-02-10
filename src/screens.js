
import { Navigation } from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('App', () => require('./App').default);
    Navigation.registerComponent('Home', () => require('./Home').default);
    Navigation.registerComponent('Auth', () => require('./Auth').default);
}
