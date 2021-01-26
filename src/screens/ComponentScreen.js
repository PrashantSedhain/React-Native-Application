import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import NameInputComponent from "../components/NameInputComponent";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const Person = {
  name: String,
  points: Number,
};

var allPlayers = [];

const addPlayer = (playerName) => {
  allPlayers.push(playerName);
};

const ComponentsScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(1);
  const [points, setPoints] = useState({});
  var peopleArray = [];
  const data = {
    count: selectedValue,
    persons: [Person],
  };

  const addValueToArray = (num) => {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(i);
    }

    return arr;
  };

  peopleArray = addValueToArray(selectedValue);

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
        <Picker.Item label="One" value={1} />
        <Picker.Item label="Two" value={2} />
        <Picker.Item label="Three" value={3} />
        <Picker.Item label="Four" value={4} />
        <Picker.Item label="Five" value={5} />
        <Picker.Item label="Six" value={6} />
      </Picker>

      <Text style={styles.titleStyle}>2. Enter their names below:</Text>
      <FlatList
        data={peopleArray}
        keyExtractor={(item) => {
          return item + "123";
        }}
        renderItem={() => {
          return <NameInputComponent />;
        }}
      />

      <TouchableOpacity style={styles.bottom}>
        <Text style={{ textAlign: "center", color: "white", fontSize: 17 }}>
          Continue
        </Text>
      </TouchableOpacity>
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

  numbering: {
    fontSize: 18,
  },

  bottom: {
    alignSelf: "center",
    justifyContent: "center",
    width: 180,
    height: 50,
    margin: 130,
    backgroundColor: "#d42511",
    borderRadius: 15,
  },
});

export default ComponentsScreen;
