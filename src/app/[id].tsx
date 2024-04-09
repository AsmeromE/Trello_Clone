import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Task Detail" }} />
      <Text style={styles.text}>{id}</Text>
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  text: { color: "white", fontSize: 20, padding: 10 },
});
