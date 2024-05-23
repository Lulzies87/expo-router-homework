import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./home";
import GameScreen from "./game";
import StatsScreen from "./statistics";

const imageURL = require("../assets/tic-tac-toe-cover.png");

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Statistics"
            component={StatsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
