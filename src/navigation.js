// import { Navigation } from 'react-native-navigation';
import { setRoot } from './services/navigation';
import iconsApp from './Icons';

const { iconsMap, iconsLoaded } = iconsApp();

export const goHome = () => iconsLoaded.then(() => {
  setRoot('bottomTabs', 'App', [
    {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              options: {
                bottomTab: {
                  fontSize: 14,
                  text: 'Home',
                  icon: iconsMap['location-city'],
                },
              },
            },
          },
        ],
      },
    },
    {
      stack: {
        children: [
          {
            component: {
              name: 'Auth',
              options: {
                bottomTab: {
                  fontSize: 14,
                  text: 'Counter',
                  icon: iconsMap['user-circle'],
                },
              },
            },
          },
        ],
      },
    },
  ]);
});

export const goToAuth = () => setRoot('stack', 'SignIn', [
  {
    component: {
      name: 'Auth',
    },
  },
]);
