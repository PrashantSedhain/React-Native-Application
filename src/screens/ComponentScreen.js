import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const ComponentsScreen = ({ navigation }) => {
  const greeting = 123;
  return (
    <View>
      <Text style={styles.textStyle}>Welcome to components screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: "3%",
  },
});

export default ComponentsScreen;
