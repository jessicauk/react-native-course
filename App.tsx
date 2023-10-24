import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

interface DataItem {
  key: string;
  text: string;
}

export default function App() {
  const [courseGoals, setCurseGoals] = useState<DataItem[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const deleteGoalHandler = (key: string) => {
    setCurseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((item) => item.key !== key)
    );
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const onCancelGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (value: string) => {
    setCurseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: value, key: Math.random().toFixed(3).toString() },
    ]);
    onCancelGoalHandler();
  };
  return (
    <View style={styles.container}>
      {!modalIsVisible && (
        <Button
          title="Add new goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
      )}
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={onCancelGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item) => item.key}
          alwaysBounceVertical={false}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderColor: "#CCC",
    borderWidth: 1,
    flexBasis: "70%",
    marginRight: 10,
    padding: 8,
  },
  goalsContainer: {
    marginTop: 20,
    flex: 5,
    borderBottomWidth: 1,
    borderLeftColor: "#ccc",
  },
});
