import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

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
    onAddGoal(inputValue);
    clearInput();
  };

  const cancelHandler = () => {
    onCancel()
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          ref={textInputRef}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={inputValue}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={cancelHandler} />
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
  buttonContainer: {
    flexDirection: "row"
  }
});
