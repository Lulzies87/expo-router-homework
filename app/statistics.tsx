import { View, Text, StyleSheet } from "react-native";
import NavButton from "../components/NavButton";
import Stat from "../components/Stat";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function StatsScreen() {
  const stats = useSelector((state: RootState) => state.stats);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Game Statistics</Text>
      </View>
      <View style={styles.statsContainer}>
        <Stat title="Total games played" value={stats.totalGames} />
        <Stat title="Games X won" value={stats.totalXWins} />
        <Stat title="Games O won" value={stats.totalOWins} />
        <Stat
          title="Ties"
          value={stats.totalGames - stats.totalXWins - stats.totalOWins}
        />
      </View>
      <View style={styles.footer}>
        <NavButton screenName="Home" innerText="Home" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C0C",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  statsContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  footer: {
    flex: 1,
    justifyContent: "center",
  },
});
