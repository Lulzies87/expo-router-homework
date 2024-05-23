import { StyleSheet, View, Text, Alert, Pressable } from "react-native";
import GameBoard from "../components/GameBoard";
import NavButton from "../components/NavButton";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { countGame, countOWin, countXWin } from "./slices/statsSlice";

export default function GameScreen() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const winner = checkWinner(squares);
  const isBoardFull = squares.every((square) => square !== null);

  useEffect(() => {
    if (winner) {
      handleGameOver(`${winner} Wins!`);
      if (winner === "X") {
        dispatch(countXWin());
      } else {
        dispatch(countOWin());
      }
    } else if (isBoardFull) {
      handleGameOver("It's a tie!");
    }
  }, [squares]);

  const handleGameOver = (message: string) => {
    dispatch(countGame());
    Alert.alert("Game Over", message, [
      {
        text: "Reset",
        onPress: () => resetGame(),
      },
      {
        text: "Home",
        onPress: () => navigation.navigate("Home" as never),
      },
    ]);
  };

  const handlePress = (i: number) => {
    if (winner || squares[i]) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.playerText}>{xIsNext ? "X" : "O"}</Text>
        <Text style={styles.headerText}> to play:</Text>
      </View>
      <View style={styles.board}>
        <GameBoard squares={squares} onPress={handlePress} />
      </View>
      <View style={styles.footer}>
        <View style={styles.buttonWrapper}>
          <Pressable style={styles.button} onPress={resetGame}>
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
        </View>
        <NavButton screenName="Home" innerText="Home" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const checkWinner = (squares: string[]) => {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of winLines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
  },
  playerText: {
    color: "#E80F88",
    fontSize: 22,
  },
  board: {
    flex: 3,
    justifyContent: "center",
  },
  footer: {
    width: 320,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    backgroundColor: "#4C0033",
    width: 300,
    borderWidth: 2,
    borderColor: "#790252",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  button: {
    width: "100%",
    padding: 20,
  },
  buttonText: {
    color: "#E80F88",
    fontSize: 16,
    textAlign: "center",
  },
});
