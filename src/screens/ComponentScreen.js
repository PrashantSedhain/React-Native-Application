import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ComponentsScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("One");

  return (
    <View>
      <Text style={styles.textStyle}>Welcome to Dhumbal Calculator</Text>
      <View style={styles.lineStyle}></View>
      <Text style={styles.titleStyle}>1. How many players?</Text>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 50,
          width: 120,
          alignSelf: "center",
          // backgroundColor: "red",
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="One" value="1" />
        <Picker.Item label="Two" value="2" />
        <Picker.Item label="Three" value="3" />
        <Picker.Item label="Four" value="4" />
        <Picker.Item label="Five" value="5" />
        <Picker.Item label="Six" value="6" />
      </Picker>

      {/* <Text>Selected number of people is {selectedValue}</Text> */}
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

  titleStyle: {
    paddingTop: 10,
    fontSize: 20,
    margin: 10,
    alignSelf: "center",
  },

  lineStyle: {
    borderWidth: 1,
    borderColor: "gray",
  },
});

export default ComponentsScreen;
