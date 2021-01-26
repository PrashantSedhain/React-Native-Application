import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ComponentsScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import PicturesScreen from "./src/screens/PicturesScreen";
import CounterScreen from "./src/screens/CounterScreen";
import RandomColorScreen from "./src/screens/RandomColorScreen";
import RgbControllerScreen from "./src/screens/RgbControllerScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{ title: "List Screen" }}
        />
        <Stack.Screen
          options={{ title: "Component Screen" }}
          name="ComponentsScreen"
          component={ComponentsScreen}
        />

        <Stack.Screen
          options={{ title: "Pictures Screen" }}
          name="PicturesScreen"
          component={PicturesScreen}
        />

        <Stack.Screen
          options={{ title: "Counter Screen" }}
          name="CounterScreen"
          component={CounterScreen}
        />
        <Stack.Screen
          options={{ title: "Random Color Screen" }}
          name="RandomColorScreen"
          component={RandomColorScreen}
        />

        <Stack.Screen
          options={{ title: "RGB Controller Screen" }}
          name="RgbControllerScreen"
          component={RgbControllerScreen}
        />

        <Stack.Screen
          options={{ title: "Box Screen" }}
          name="BoxScreen"
          component={BoxScreen}
        />

        <Stack.Screen
          options={{ title: "Text Input Screen" }}
          name="TextScreen"
          component={TextScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonStyle: {
    paddingTop: "50px",
  },
});

export default App;
