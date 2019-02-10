import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux';
import store from './../../redux/store'

export const registerScreen = (screenName, component) => {
  Navigation.registerComponentWithRedux(screenName, () => component, Provider, store)
}

export const setRoot = (type, id, children) => Navigation.setRoot({
  root: {
    [type]: {
      id,
      children,
    },
  },
})
