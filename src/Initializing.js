import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { goToAuth, goHome } from './navigation';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default class Initializing extends React.Component {
  async componentDidMount() {
    try {
      const user = 1;
      if (user) {
        goHome();
      } else {
        goToAuth();
      }
    } catch (err) {
      goToAuth();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading...</Text>
      </View>
    );
  }
}
