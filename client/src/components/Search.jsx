import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Ionicons
          style={styles.searchIcon}
          name="ios-search"
          size={20}
          color="#000"
        />
        <TextInput
          style={[styles.input]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          placeholder="Search"
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#153075",
    borderRadius: 28,
    color: "white",
    paddingHorizontal: 20,
  },
  searchIcon: {
    padding: 10,
    color: "white",
  },
  input: {
    flex: 1,
    height: 56,
    color: "white",
    borderRadius: 28,
    borderColor: "#153075",
  },
});
