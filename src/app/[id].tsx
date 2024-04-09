import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Task } from "../models/Task";
import { BSON, Realm } from "realm";
import { useRealm, useObject } from "@realm/react";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));
  const [updatedDescription, setUpdatedDesctiption] = useState(
    task?.description
  );

  const realm = useRealm();
  const updateDescription = () => {
    if (!task) {
      return;
    }
    realm.write(() => {
      task.description = updatedDescription;
    });
  };

  if (!task) {
    return <Text>Not found</Text>;
  }
  return (
    <View>
      <Stack.Screen options={{ title: "Task Detail" }} />
      <TextInput
        value={updatedDescription}
        onChangeText={setUpdatedDesctiption}
        onEndEditing={updateDescription}
        style={styles.text}
      ></TextInput>
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  text: { color: "white", fontSize: 20, padding: 10 },
});
