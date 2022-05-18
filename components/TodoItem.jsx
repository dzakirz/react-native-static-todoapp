import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const TodoItem = ({ todo, onPressHandler }) => {

  return (
    <TouchableOpacity
      onPress={() => onPressHandler(todo.key)}
    >
      <Text style={styles.item}>{todo.text}</Text>
    </TouchableOpacity>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed'
  }
})