import React, {useEffect, useState} from 'react';
import { View, Alert } from 'react-native';
import { Audio } from 'expo-av';
import Clock from "./Clock.js";
import Todo from "./Todo.js";

export default function TimerLogic() {
  const [seconds, setSeconds] = useState(60*10);
  const [active, setActive] = useState(false);
  const [end, setEnd] = useState(false);
  const countdown = () => setSeconds((prev) => (prev-1));

  //This works weirdly. Every second, you start a new setInterval instance that counts down. 
  //Every count down, useEffect re-renders. Clears previous interval. Starts new interval. 
  //This is needed b/c the seconds state wouldn't refresh if useEffect didn't rerender. Yay React ;-;
  useEffect(() => {
    let interval
    if (seconds !== 0 && active) interval = setInterval(countdown, 1000);
    else if (seconds == 0 && active) {
      setActive(false);
      setEnd(true);
    }
    return () => clearInterval(interval);
  }, [seconds, active]);

  useEffect(() => {
    if (end) {
      Alert.alert("Time's up!", "Did you achieve your goal? How can you make the next sprint better? :-)", [
        {text: "Next sprint", onPress:() => setSeconds(60*10) } 
      ]);
      playSound(); 
      setEnd(false);
    }
  }, [end]);

  async function playSound() {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(require('../assets/singingBowl.mp3'));
      await sound.replayAsync();
      await sound.unloadAsync();
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View>
      <Clock 
        seconds={seconds} 
        setSeconds={setSeconds} 
        active={active} 
        setActive={setActive}
      />
      <Todo active={active} seconds={seconds}/>
    </View>
  );
}