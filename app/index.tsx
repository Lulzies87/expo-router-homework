import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import ImageViewer from "../components/ImageViewer";
import MainMenuLinks from "../components/MainMenuLinks";

const imageURL = require("../assets/cover-300x300.jpeg");

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageURL={imageURL} />
      </View>
      <MainMenuLinks />
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
    flex: 2,
    paddingTop: 58,
  },
});
