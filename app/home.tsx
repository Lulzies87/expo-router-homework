import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViewer from "../components/ImageViewer";
import MenuButtons from "../components/MenuButtons";

const imageURL = require("../assets/tic-tac-toe-cover.png");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageURL={imageURL} />
      </View>
      <MenuButtons />
      <StatusBar style="auto" />
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
  imageContainer: {
    flex: 3,
    paddingTop: 58,
  },
});
