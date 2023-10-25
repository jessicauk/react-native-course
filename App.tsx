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
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add new goal"
          onPress={startAddGoalHandler}
        />
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
                <GoalItem
                  item={itemData.item}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => item.key}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    marginTop: 20,
    flex: 5,
  },
});
