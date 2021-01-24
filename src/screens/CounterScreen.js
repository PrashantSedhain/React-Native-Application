import React, { useState } from "react";
import { Text, StyleSheet, SafeAreaView, Button } from "react-native";
const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Welcome to counter screen</Text>

      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Text style={(styles.textStyle, styles.counterNumber)}>{counter}</Text>
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: "5%",
    fontWeight: "bold",
  },

  counterNumber: {
    fontSize: 80,
    textAlign: "center",
  },
});

export default CounterScreen;
