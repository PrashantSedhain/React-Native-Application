import React from "react";
import { View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.childStyle}></View>
      <View style={styles.childStyle2}></View>
      <View style={styles.childStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    height: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  childStyle: {
    width: 100,
    height: 100,
    backgroundColor: "violet",
    borderWidth: 2,
  },

  childStyle2: {
    width: 100,
    height: 100,
    backgroundColor: "violet",
    borderWidth: 2,
    position: "absolute",
    top: 100,
    left: 135,
  },
});

export default BoxScreen;
