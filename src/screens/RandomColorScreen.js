import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const RandomColorScreen = ({ navigation }) => {
  const [color, setcolor] = useState([]);
  return (
    <View>
      <Button
        onPress={() => {
          setcolor([...color, randomRgb()]);
        }}
        title="Add a color"
      />

      <FlatList
        keyExtractor={(item) => item}
        data={color}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default RandomColorScreen;
