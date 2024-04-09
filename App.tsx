import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import TaskBoard from "./src/components/TaskBoard";

export default function App() {
  return (
    <View style={styles.container}>
      <TaskBoard />
      <StatusBarExpo style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
