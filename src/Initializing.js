import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

async function initApp(user) {
  try {
    if (user) {
      goHome();
    } else {
      goToAuth();
    }
  } catch (err) {
    goToAuth();
  }
}

export default function Initializing() {
  const [user] = useState(1);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    initApp(user);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Loading...</Text>
    </View>
  );
}
