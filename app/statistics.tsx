import { View, Text, StyleSheet } from "react-native";
import NavigationLink from "../components/NavigationLink";
import Stat from "../components/Stat";

export default function Statistics() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Game Statistics</Text>
      </View>
      <View style={styles.statsContainer}>
        <Stat title="Total games played" value={68} />
        <Stat title="Games X won" value={11} />
        <Stat title="Games Y won" value={17} />
        <Stat title="Ties" value={40} />
      </View>
      <View style={styles.footer}>
        <NavigationLink location="/" innerText="Home" />
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
