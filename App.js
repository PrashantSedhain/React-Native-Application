import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ComponentsScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
export default function App() {
  return <ListScreen />;
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
