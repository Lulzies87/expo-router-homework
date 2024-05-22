import { StyleSheet, View } from "react-native";
import Square from "./Square";

export default function GameBoard() {
  return (
    <View style={styles.gameContainer}>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    width: 320,
    height: 320,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
