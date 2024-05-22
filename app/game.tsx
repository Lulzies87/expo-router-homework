import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Game() {
  return (
    <View>
      <Text>Game Page</Text>
      <Link href="/">Home</Link>
    </View>
  );
}
