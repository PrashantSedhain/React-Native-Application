import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Prashant", Age: 10 },
    { name: "Anish", Age: 10 },
    { name: "Abit", Age: 10 },
    { name: "Errol", Age: 10 },
    { name: "Eric", Age: 10 },
    { name: "Meera", Age: 10 },
    { name: "Suman", Age: 10 },
    { name: "Sushant", Age: 10 },
    { name: "Alisha", Age: 10 },
    { name: "Pujan", Age: 10 },
    { name: "Reena", Age: 10 },
    { name: "Sagun", Age: 10 },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => {
        return friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name + " - " + "Age " + item.Age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    paddingLeft: 20,
  },
});

export default ListScreen;
