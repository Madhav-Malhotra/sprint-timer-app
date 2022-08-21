import React from 'react';
import styles from "./components/styles"

import TimerLogic from "./components/TimerLogic";
import { View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TimerLogic />
    </View>
  );
}
