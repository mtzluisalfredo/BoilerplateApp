
import { Navigation } from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponentWithRedux('App', () => require('./App').default);
    Navigation.registerComponentWithRedux('Home', () => require('./Home').default);
    Navigation.registerComponentWithRedux('Auth', () => require('./Auth').default);
}