import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ title, setFunction, bgColor, textColor }) => {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: bgColor, color: textColor }]}
      onPress={() => {
        setFunction();
      }}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 20,
    height: 56,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#2A4BA0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
