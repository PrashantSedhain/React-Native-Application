import react from "react";
import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";

const RgbControllerScreen = () => {
  const [red, setRed] = useState(250);
  const [green, setGreen] = useState(250);
  const [blue, setBlue] = useState(200);

  const setColor = (colorName, change) => {
    if (colorName === "Red") {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
    } else if (colorName === "Blue") {
      if (blue + change > 255 || blue + change < 0) {
        return;
      } else {
        setBlue(blue + change);
      }
    } else if (colorName === "Green") {
      if (green + change > 255 || green + change < 0) {
        return;
      } else {
        setBlue(blue + change);
      }
    }
  };
  return (
    <View>
      <Text style={styles.textStyle}>RGB Controller Screen</Text>
      <ButtonComponent
        onClickMore={() => {
          setRed(red + 1);
        }}
        onClickLess={() => {
          setRed(red - 1);
        }}
        color="Red"
      />
      <ButtonComponent
        onClickMore={() => {
          setGreen(green + 1);
        }}
        onClickLess={() => {
          setGreen(green - 1);
        }}
        color="Green"
      />
      <ButtonComponent
        onClickMore={() => {
          setBlue(blue + 1);
        }}
        onClickLess={() => {
          setBlue(blue - 1);
        }}
        color="Blue"
      />

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red},${green},${blue} )`,
        }}
      ></View>
      <Text>{`(${red}, ${green},${blue}`}</Text>
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
