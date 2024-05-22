import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function NavigationLink({ location, innerText }: any) {
  return (
    <View style={styles.linkWrapper}>
      <Link style={styles.link} href={location}>
        <Text style={styles.linkText}>{innerText}</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  linkWrapper: {
    backgroundColor: "#4C0033",
    width: 300,
    borderWidth: 2,
    borderColor: "#790252",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  link: {
    width: "100%",
    padding: 20,
  },
  linkText: {
    color: "#E80F88",
    fontSize: 16,
    textAlign: "center",
  },
});
