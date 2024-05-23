import { StyleSheet, View, Text } from "react-native";
import NavButton from "./NavButton";

export default function MenuButtons() {
  return (
    <View style={styles.buttonsContainer}>
      <NavButton screenName="Game" innerText="Play" />
      <NavButton screenName="Statistics" innerText="Statistics" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    width: 320,
    alignItems: "center",
    justifyContent: "center",
  },
});
