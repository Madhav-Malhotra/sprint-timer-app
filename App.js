import React from 'react';
import styles from "./components/styles"

import TimerLogic from "./components/TimerLogic";
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({'space-mono': require('./assets/SpaceMono-Regular.ttf')});

  if (!fontsLoaded) return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
  else return (
    <View style={styles.container}>
      <TimerLogic />
    </View>
  );
}
