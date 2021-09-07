import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default function InputDisplay(props) {
  const handleChange = (val) => {
    props.setDisplayTime(val) 
  }

  return (
    <TextInput 
      style={styles.displayTimeInput}
      onChangeText={handleChange}
      value={props.displayTime}
      keyboardType="numbers-and-punctuation"
      placeholder="MM:SS"
    />
  )
}