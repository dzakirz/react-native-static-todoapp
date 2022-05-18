import { useState, Fragment } from "react"
import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView
} from "react-native"
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import AddTodo from "./components/AddTodo"
import { Animated } from "react-native"

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Mandi', key: 1 },
    { text: 'Makan', key: 2 },
    { text: 'Tidur', key: 3 },
  ])

  const onPressHandler = (key) => {
    setTodos(prev => {
      return prev.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    setTodos((prev) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prev
      ]
    })
  }

  return (
    <Fragment>
      <StatusBar style="light" backgroundColor="#6bb0ff" />

      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              style={{ height: 500 }}
              showsVerticalScrollIndicator={true}
              onScroll={(e) => { e.nativeEvent.contentOffset.y }}
              data={todos}
              renderItem={todo => (
                <TodoItem
                  todo={todo.item}
                  onPressHandler={onPressHandler}
                />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25
  },
  content: {
    paddingHorizontal: 40,
  },
  list: {
    marginTop: 35
  }
})
