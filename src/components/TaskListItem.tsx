import { Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useRealm } from "@realm/react";

export default function TaskListItem({ task }) {
  const realm = useRealm();
  const deleteTask = () => {
    realm.write(() => {
      realm.delete(task);
    });
  };
  return (
    <>
      <Link href={`/${task._id}`} asChild>
        <Pressable style={styles.container}>
          <Text style={styles.text}>{task.description}</Text>
          <AntDesign
            onPress={deleteTask}
            name="close"
            size={24}
            color="white"
          />
        </Pressable>
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D2125",
    padding: 8,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: { color: "white", fontSize: 16 },
});
