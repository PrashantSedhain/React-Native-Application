import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const NameInputComponent = (props) => {
  var currentPlayer;
  return (
    <View style={{ paddingTop: 10 }}>
      <TextInput
        onEndEditing={props.addPlayer}
        style={styles.input}
        placeholder="E.g John"
        value={currentPlayer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1.2,
    alignSelf: "center",
    margin: 5,
    width: 200,
    textAlign: "center",
    borderColor: "#aba7a2",
  },
});

export default NameInputComponent;
