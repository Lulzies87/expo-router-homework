import { StyleSheet, View, Text } from "react-native";
import GameBoard from "../components/GameBoard";
import NavigationLink from "../components/NavigationLink";
import { StatusBar } from "expo-status-bar";

export default function Game() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.playerText}>X</Text>
        <Text style={styles.headerText}> to play:</Text>
      </View>
      <View style={styles.board}>
        <GameBoard />
      </View>
      <View style={styles.footer}>
        <NavigationLink location="/" innerText="Home" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
  },
  header: {
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
  footer: {
    width: 320,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    flex: 2,
  },
});
