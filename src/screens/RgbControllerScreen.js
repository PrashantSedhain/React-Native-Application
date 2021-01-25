import react from "react";
import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";

const reducerFunc = (state, action) => {
  // state === {red: number, green: number, blue: number}
  // action = {colorToChange" 'red' || 'green', || 'blue', ampount: 15 || -15 }

  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.red + action.amount };

    case "blue":
      return { ...state, blue: state.red + action.amount };

    default:
      return state;
  }
};

const RgbControllerScreen = () => {
  const [state, dispatch] = useReducer(reducerFunc, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <Text style={styles.textStyle}>RGB Controller Screen</Text>
      <ButtonComponent
        onClickMore={() => {
          dispatch({ colorToChange: "red", amount: 10 });
        }}
        onClickLess={() => {
          dispatch({ colorToChange: "red", amount: -10 });
        }}
        color="Red"
      />
      <ButtonComponent
        onClickMore={() => {
          dispatch({ colorToChange: "green", amount: 10 });
        }}
        onClickLess={() => {
          dispatch({ colorToChange: "green", amount: -10 });
        }}
        color="Green"
      />
      <ButtonComponent
        onClickMore={() => {
          dispatch({ colorToChange: "blue", amount: 10 });
        }}
        onClickLess={() => {
          dispatch({ colorToChange: "blue", amount: -10 });
        }}
        color="Blue"
      />

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue} )`,
        }}
      ></View>
      {/* <Text>{`(${red}, ${green},${blue}`}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: "5%",
    fontWeight: "bold",
  },
});

export default RgbControllerScreen;
