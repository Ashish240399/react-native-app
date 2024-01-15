import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/EvilIcons";

const Banner = ({ banner }) => {
  return (
    <View style={[styles.banner, { backgroundColor: banner.color }]}>
      <View style={styles.icon}>
        <Icon name="image" size={70} color={"white"} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Get</Text>
        <Text style={styles.boldText}>{`${banner.offPercent} OFF`}</Text>
        <Text style={styles.text}>
          On first <Text style={styles.boldText}>{banner.firstOrder}</Text>{" "}
          order
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    borderRadius: 16,
    width: 260,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    height: 130,
  },
  icon: {
    color: "white",
  },
  textContainer: {
    color: "white",
  },
  text: {
    color: "white",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
});

export default Banner;
