import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import validation from "./validation";
import convertTime from './convertTime';
import InputDisplay from './InputDisplay';
import styles from './styles';

export default function Clock(props) {
  const [displayTime, setDisplayTime] = useState();
  const lastTime = useRef(60*10)
  useEffect(() => setDisplayTime(convertTime(props.seconds, 'seconds')), [props.seconds]);

  const toggle = () => {
    if (!props.active) {
      let [correct, fix] = validation(displayTime);
      let disp;
      if (fix) disp = fix;
      else disp = displayTime

      if (correct) props.setSeconds(convertTime(disp, 'display'));
      else {
        Alert.alert("Oops... the clock broke!", "Make sure the time you typed looks like this: MM:SS (ex: 10:00).\n\nNo letters and only 4 numbers please!", [
          {text: "Try again", onPress:() => props.setSeconds(60*10) } 
        ]);  
        return null;      
      }
      lastTime.current = convertTime(disp, 'display');
    }

    props.setActive(!props.active);
  }

  let display = (<Text style={styles.displayTime}>{displayTime}</Text>);
  if (props.active) display = (<Text style={styles.displayTime}>{displayTime}</Text>);
  else display = (<InputDisplay displayTime={displayTime} setDisplayTime={setDisplayTime}/>);

  return (
    <View style={styles.clockContainer}>
      {display}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggle}>
          <Text style={styles.startStop}>{props.active ? "Stop" : "Start"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.setSeconds(lastTime.current)}>
          <Text style={styles.reset}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}