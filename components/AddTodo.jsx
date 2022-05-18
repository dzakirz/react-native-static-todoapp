import { View, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState('')

  const clearInput = () => {
    setText("")
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='add todo . . .'
        onChangeText={(value) => setText(value)}
      />
      <Button
        title="Add"
        color="#6bb0ff"
        onPress={() => submitHandler(text)}
      />
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  input: {
    marginTop: 35,
    marginBottom: 15,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})