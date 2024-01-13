import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import PlusIcon from "react-native-vector-icons/AntDesign";

const ProductCards = ({
  style,
  item,
  setAddToCart,
  addToCart,
  setAddToFav,
  addToFav,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.thumbnailView}>
        <ImageBackground
          source={{ uri: item.thumbnail }}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        >
          <Pressable
            onPress={() => {
              if (addToFav.includes(item.id)) {
                setAddToFav(addToFav.filter((el) => el != item.id));
              } else {
                setAddToFav([...addToFav, item.id]);
              }
            }}
            style={{ position: "absolute", left: 10, top: 10, zIndex: 5 }}
          >
            <Icon
              name="heart"
              size={14}
              color={addToFav.includes(item.id) ? "#FF8181" : "gray"}
            />
          </Pressable>
        </ImageBackground>
      </View>
      <View style={{ padding: "10px" }}>
        <Text style={styles.priceText}>${item.price}</Text>
        <Text style={style.titleText}>{item.title}</Text>
        <Pressable
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            backgroundColor: "#2A4BA0",
            color: "#FF8181",
            height: 24,
            width: 24,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
          }}
          onPress={() => {
            if (addToCart[item.id]) {
              setAddToCart({ ...addToCart, [item.id]: addToCart[item.id] + 1 });
            } else {
              setAddToCart({ ...addToCart, [item.id]: 1 });
            }
          }}
        >
          {addToCart[item.id] && <Text>{addToCart[item.id]}</Text>}
          <PlusIcon name="plus" size={12} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default ProductCards;

const styles = StyleSheet.create({
  container: {
    height: "194px",
    backgroundColor: "#F8F9FB",
    borderRadius: "12px",
  },
  thumbnailView: {
    height: "120px",
    width: "100%",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    overflow: "hidden",
  },
  priceText: {
    fontSize: 14,
    color: "#1E222B",
    fontWeight: "bold",
    lineHeight: 20,
  },
  titleText: {
    color: "#616A7D",
    fontSize: 12,
  },
});
