import React from "react";
import { View, StyleSheet } from "react-native";
import TaskList from "./TaskList";
import { LinearGradient } from "expo-linear-gradient";

const TaskBoard = () => {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#8711c1", "#2472fc"]}
        // colors={["#3a7bd5", "#3a6073"]}
        // colors={["white", "#2472fc"]}
        style={StyleSheet.absoluteFill}
      />
      <TaskList />
    </View>
  );
};

export default TaskBoard;
