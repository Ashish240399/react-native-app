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
  setTotalItemToCart,
  totalItemToTheCart,
  navigation,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={() => navigation.navigate("ProductDetails", { item })}
        style={{ flex: 1 }}
      >
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
              style={{
                position: "absolute",
                left: 5,
                top: 5,
                zIndex: 5,
                padding: 10,
              }}
            >
              <Icon
                name="heart"
                size={18}
                color={addToFav.includes(item.id) ? "#FF8181" : "gray"}
              />
            </Pressable>
          </ImageBackground>
        </View>
        <View style={{ padding: 10 }}>
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
              borderRadius: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 5,
            }}
            onPress={() => {
              if (addToCart[item.id]) {
                setAddToCart({
                  ...addToCart,
                  [item.id]: addToCart[item.id] + 1,
                });
              } else {
                setAddToCart({ ...addToCart, [item.id]: 1 });
              }
              setTotalItemToCart(totalItemToTheCart + 1);
            }}
          >
            {addToCart[item.id] && <Text>{addToCart[item.id]}</Text>}
            <PlusIcon name="plus" size={12} color="white" />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};
export default ProductCards;

const styles = StyleSheet.create({
  container: {
    height: 194,
    backgroundColor: "#F8F9FB",
    borderRadius: 12,
  },
  thumbnailView: {
    height: 120,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
