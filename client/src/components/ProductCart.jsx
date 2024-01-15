import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlusIcon from "react-native-vector-icons/AntDesign";

const ProductCart = ({ item, addFn, removeFn, itemCount }) => {
  console.log(item.thumbnail);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => removeFn(item)}>
          <View style={styles.button}>
            <PlusIcon name="minus" size={12} color="black" />
          </View>
        </Pressable>
        <View style={styles.countContainer}>
          <Text>{itemCount}</Text>
        </View>
        <Pressable onPress={() => addFn(item)}>
          <View style={styles.button}>
            <PlusIcon name="plus" size={12} color="black" />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 6,
  },
  textContainer: {
    display: "flex",
    marginLeft: 30,
  },
  title: {
    fontSize: 14,
    color: "#1E222B",
  },
  price: {
    fontSize: 14,
    color: "#1E222B",
    fontWeight: "400",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F8F9FB",
    height: 30,
    width: 30,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  countContainer: {
    marginHorizontal: 20,
  },
});

export default ProductCart;
