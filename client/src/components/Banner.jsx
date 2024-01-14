import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/EvilIcons";

const Banner = ({ banner }) => {
  return (
    <View
      style={{
        backgroundColor: banner.color,
        borderRadius: 16,
        width: "50%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        marginRight: 20,
        marginStart: 20,
        marginEnd: 20,
        maxHeight: 270,
      }}
    >
      <View>
        <Icon name="image" size={70} color={"white"} />
      </View>
      <View style={{ color: "white" }}>
        <Text style={{ color: "white" }}>Get</Text>
        <Text
          style={{ fontWeight: "bold", fontSize: 25, color: "white" }}
        >{`${banner.offPercent} OFF`}</Text>
        <Text style={{ color: "white" }}>
          On first{" "}
          <Text style={{ fontWeight: "bold" }}>{banner.firstOrder}</Text> order
        </Text>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
