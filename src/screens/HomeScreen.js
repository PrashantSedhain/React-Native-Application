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
      <Button
        title="Go to Components Screen"
        onPress={() => {
          navigation.navigate("ComponentsScreen");
        }}
      />
      <Button
        title="Go to Pictures Screen"
        onPress={() => {
          navigation.navigate("PicturesScreen");
        }}
      />

      <Button
        title="Go to Counter Screen"
        onPress={() => {
          navigation.navigate("CounterScreen");
        }}
      />

      <Button
        title="Go to Color Screen"
        onPress={() => {
          navigation.navigate("RandomColorScreen");
        }}
      />

      <Button
        onPress={() => {
          navigation.navigate("RgbControllerScreen");
        }}
        title="Go to RGB Controller Screen"
      />

      <Button
        onPress={() => {
          navigation.navigate("TextScreen");
        }}
        title="Go To Text Input Area"
      />

      <Button
        onPress={() => {
          navigation.navigate("BoxScreen");
        }}
        title="Go To Box Screen"
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
