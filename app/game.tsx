import { View } from "react-native";
import GameBoard from "../components/GameBoard";
import NavigationLink from "../components/NavigationLink";

export default function Game() {
  return (
    <View>
      <GameBoard />
      <NavigationLink location="/" innerText="Home"/>
    </View>
  );
}
