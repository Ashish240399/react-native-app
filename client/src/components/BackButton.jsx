import { StyleSheet, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const BackButton = () => {
  return (
    <View>
      <Icon name="chevron-back" size={15} color="black" style={styles.icon} />
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  icon: {
    marginTop: 7,
  },
});
