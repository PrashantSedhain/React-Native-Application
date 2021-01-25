import React, { useReducer } from "react";
import { Text, StyleSheet, SafeAreaView, Button } from "react-native";

const reducerFunc = (state, action) => {
  switch (action.performCount) {
    case "increase":
      return { counter: state.counter + 1 };

    case "decrease":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};
const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducerFunc, { counter: 0 });
  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Welcome to counter screen</Text>

      <Button
        title="Increase"
        onPress={() => {
          dispatch({ performCount: "increase" });
        }}
      />
      <Text style={(styles.textStyle, styles.counterNumber)}>
        {state.counter}
      </Text>
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ performCount: "decrease" });
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
