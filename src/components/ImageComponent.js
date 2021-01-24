import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";

const ImageComponent = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={{ fontSize: 20, paddingVertical: 5, paddingTop: 10 }}>
        {props.title}
      </Text>
      <Image style={styles.imageStyle} source={props.imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 300,
    paddingTop: 20,
  },

  viewStyle: {
    alignItems: "center",
  },
});

export default ImageComponent;
