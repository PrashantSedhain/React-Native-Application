import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ButtonComponent = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.color}</Text>
      <Button
        onPress={() => props.onClickMore()}
        style={(styles.imageStyle, styles.viewStyle)}
        title={`More ${props.color}`}
      />
      <Button
        onPress={() => props.onClickLess()}
        title={`Less ${props.color}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 300,
    paddingTop: 30,
  },

  viewStyle: {
    alignItems: "stretch",
  },
});

export default ButtonComponent;
