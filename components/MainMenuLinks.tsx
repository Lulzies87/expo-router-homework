import { StyleSheet, View, Text } from "react-native";
import NavigationLink from "./NavigationLink";

export default function MainMenuLinks() {
  return (
    <View style={styles.linksContainer}>
        <NavigationLink location="/game" innerText="Play" />
        <NavigationLink location="/statistics" innerText="Statistics" />
    </View>
  );
}

const styles = StyleSheet.create({
  linksContainer: {
    flex: 1,
    width: 320,
    alignItems: "center",
    justifyContent: "center",
  },
});
