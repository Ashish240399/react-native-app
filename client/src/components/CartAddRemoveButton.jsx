import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlusIcon from "react-native-vector-icons/AntDesign";

const CartAddRemoveButton = ({ addFn, removeFn, value }) => {
  return (
    <View style={styles.button}>
      <Pressable
        style={styles.pressableLeft}
        onPress={() => {
          removeFn();
        }}
      >
        <PlusIcon name="minus" size={20} color="#2A4BA0" style={styles.icon} />
      </Pressable>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
      <Pressable
        style={styles.pressableRight}
        onPress={() => {
          addFn();
        }}
      >
        <PlusIcon name="plus" size={20} color="#2A4BA0" style={styles.icon} />
      </Pressable>
    </View>
  );
};

export default CartAddRemoveButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 20,
    height: 56,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#2A4BA0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pressableLeft: {
    color: "#2A4BA0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#E7ECF0",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  pressableRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#E7ECF0",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  icon: {
    fontWeight: "bold",
  },
  valueContainer: {
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: "100%",
    borderRightColor: "#2A4BA0",
    borderLeftColor: "#2A4BA0",
    color: "#2A4BA0",
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  valueText: {
    color: "#2A4BA0",
    fontWeight: "bold",
  },
});
