import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageComponent from "../components/ImageComponent";
const PicturesScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.textStyle}>Welcome to pictures screen</Text>
        <ImageComponent
          title="Cat"
          imageSource={require("../../assets/cat.png")}
        />
        <ImageComponent
          title="House"
          imageSource={require("../../assets/house.jpg")}
        />
        <ImageComponent
          title="Dog"
          imageSource={require("../../assets/dog.jpg")}
        />
        {/* <ImageComponent title="Prashant" /> */}
      </ScrollView>
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
});

export default PicturesScreen;
