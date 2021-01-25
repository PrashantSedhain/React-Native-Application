import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { set } from "react-native-reanimated";

const TextScreen = ({ navigation }) => {
  const [name, setName] = useState("Prashant");
  const [password, setPassword] = useState("");

  const warning = (
    <Text style={{ textAlign: "center", fontSize: 16, color: "red" }}>
      Passwords must be longer than 5 characters!
    </Text>
  );

  return (
    <View>
      <Text style={styles.textStyle}>Welcome to input area</Text>

      <TextInput
        onChangeText={(newValue) => {
          setName(newValue);
        }}
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputTextStyle}
        placeholder="Enter your name"
      />

      <TextInput
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
        secureTextEntry={true}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputTextStyle}
        placeholder="Enter your password"
      />
      {password.length >= 5 ? null : warning}
      <Text
        style={{ textAlign: "center", fontSize: 16 }}
      >{`The name you are typing is ${name}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: "3%",
  },

  inputTextStyle: {
    borderWidth: 1,
    margin: 15,
    height: 40,
  },
});

export default TextScreen;
