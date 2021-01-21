import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = 123;
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text>{greeting + 1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
