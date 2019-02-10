import { Navigation } from 'react-native-navigation'

export const goHome = () => Navigation.setRoot({
    root: {
      stack: {
        id: 'Home',
        children: [
          {
            component: {
              name: 'Home',
            }
          }
      ],
      }
    }
  })

export const goToAuth = () => Navigation.setRoot({
    root: {
      stack: {
        id: 'Auth',
        children: [
          {
            component: {
              name: 'Auth',
            }
          }
      ],
      }
    }
  })
