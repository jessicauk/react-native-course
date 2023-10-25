import React, { useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

interface Props {
  onAddGoal: (value: string) => void;
  onCancel: () => void;
  visible: boolean;
}

export default function GoalInput({ onAddGoal, onCancel, visible }: Props) {
  const textInputRef = useRef<TextInput>(null);
  const [inputValue, setInputValue] = useState("");

  const goalInputHandler = (text: string) => {
    setInputValue(text);
  };

  const clearInput = () => {
    if (textInputRef.current) {
      textInputRef.current.clear();
      setInputValue("");
    }
  };

  const addGoalHandler = () => {
    if (inputValue) {
      onAddGoal(inputValue);
      clearInput();
    }
  };

  const cancelHandler = () => {
    onCancel();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          ref={textInputRef}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={inputValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderColor: "#CCC",
    borderWidth: 1,
    width: "90%",
    padding: 8,
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "43%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
