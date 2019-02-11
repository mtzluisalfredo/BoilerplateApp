import { Navigation } from 'react-native-navigation';

export const goHome = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [{
        stack: {
          children: [{
            component: {
              name: 'Home',
              passProps: {
                text: 'This is tab 1',
              },
            },
          }],
          options: {
            bottomTab: {
              text: 'Tab 1',
              icon: require('./img/counter.png'),
              testID: 'FIRST_TAB_BAR_BUTTON',
            },
          },
        },
      },
      {
        component: {
          name: 'Auth',
          passProps: {
            text: 'This is tab 2',
          },
          options: {
            bottomTab: {
              text: 'Tab 2',
              icon: require('./img/counter.png'),
              testID: 'SECOND_TAB_BAR_BUTTON',
            },
          },
        },
      }],
    },
  },
});

export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Auth',
      children: [
        {
          component: {
            name: 'Auth',
          },
        },
      ],
    },
  },
});
