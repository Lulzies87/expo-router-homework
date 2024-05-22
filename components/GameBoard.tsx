import { StyleSheet, View } from "react-native";
import Square from "./Square";

type GameBoardProps = {
  squares: string[];
  onPress: (i: number) => void;
};
export default function GameBoard({ squares, onPress }: GameBoardProps) {
  return (
    <View style={styles.gameContainer}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onPress={() => onPress(i)} />
      ))}
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
