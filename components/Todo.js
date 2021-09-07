import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default function Todo(props) {
  const [todo, setTodo] = useState("")

  return (
    <TextInput
      value={todo}
      onChangeText={(val) => setTodo(val)}
      style={styles.todoInput}
      placeholder="What's your goal?"
      multiline
    />
  )
}