import { View, Text, StyleSheet } from "react-native";

type StatProps = {
  title: string;
  value: number;
};

export default function Stat({ title, value }: StatProps) {
  return (
    <View style={styles.statContainer}>
      <Text style={styles.statTitle}>{title}: </Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statContainer: {
    flexDirection: "row",
    marginVertical: 2,
  },
  statTitle: {
    fontSize: 20,
    color: "#fff",
  },
  statValue: {
    fontSize: 20,
    color: "#E80F88",
  },
});
