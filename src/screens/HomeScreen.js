import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        onPress={() => {
          navigation.navigate("ListScreen");
        }}
        title="Go to List Screen"
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ComponentsScreen");
        }}
      >
        <Text style={styles.textStyle}>Go to Components Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PicturesScreen");
        }}
      >
        <Text style={styles.picStyle}>Go to Pictures Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CounterScreen");
        }}
      >
        <Text style={styles.textStyle}>Go to Counter Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RandomColorScreen");
        }}
      >
        <Text style={styles.textStyle}>Go to Color Screen</Text>
      </TouchableOpacity>

      <Button
        onPress={() => {
          navigation.navigate("RgbControllerScreen");
        }}
        title="Go to RGB Controller Screen"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    textAlign: "center",
    color: "green",
  },

  picStyle: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: "1%",
    color: "black",
  },
});

export default HomeScreen;
