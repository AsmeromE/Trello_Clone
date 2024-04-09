import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
} from "react-native";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: "123", description: "First task" },
    { id: "234", description: "Second task" },
    { id: "345", description: "Third task" },
  ]);

  const [newTask, setNewTask] = useState("");
  const createTask = () => {
    setTasks([...tasks, { id: "567", description: newTask }]);
    setNewTask("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="New task"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <Button title="Add task" onPress={createTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    marginTop: StatusBar.currentHeight,
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    color: "white",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#102125",
  },
});

export default TaskList;
