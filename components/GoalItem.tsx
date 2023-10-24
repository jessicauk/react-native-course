import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

interface DataItem {
  key: string;
  text: string;
}

type Props = {
  item: DataItem;
  onDeleteItem: (key: string) => void;
};

export default function GoalItem({ item, onDeleteItem }: Props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(item.key)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.textItem}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  textItem: {
    color: "#fff",
  },
  pressItem: {
    opacity: 0.5,
  },
});
