import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [courseGoals, setCurseGoals] = useState<string[]>([]);
  const goalInputHandler = (text: string) => {
    setGoalText(text);
  };
  const addGoalHandler = () => {
    setCurseGoals((currentCourseGoals) => [...currentCourseGoals, goalText]);
    setGoalText("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal, index) => (
            <View style={styles.goalItem} key={goal + index}>
              <Text style={styles.textItem}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  textItem: {
    color: "#fff",
  },
});
