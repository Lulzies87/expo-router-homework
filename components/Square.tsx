import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function Square({ value, onPress }: any) {
  return (
    <Pressable style={styles.square} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: "#ddd",
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
