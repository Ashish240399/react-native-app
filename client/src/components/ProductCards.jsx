import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import PlusIcon from "react-native-vector-icons/AntDesign";
import CartContext from "../context/cart/CartContext";
import FavContext from "../context/favorites/FavContext";

const ProductCards = ({ style, item, navigation }) => {
  const { cart, addToCart, removeFromCart, totalItemToTheCart } =
    useContext(CartContext);
  const { fav, addToFav, removeFromFav } = useContext(FavContext);
  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={() =>
          navigation.navigate("ProductDetails", {
            item,
          })
        }
        style={styles.flexOne}
      >
        <View style={styles.thumbnailView}>
          <ImageBackground
            source={{ uri: item.thumbnail }}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <Pressable
              onPress={() => {
                if (fav.includes(item.id)) {
                  removeFromFav(item.id);
                } else {
                  addToFav(item.id);
                }
              }}
              style={styles.favButton}
            >
              <Icon
                name="heart"
                size={18}
                color={fav.includes(item.id) ? "#FF8181" : "gray"}
              />
            </Pressable>
          </ImageBackground>
        </View>
        <View style={styles.padding}>
          <Text style={styles.priceText}>${item.price}</Text>
          <Text style={style.titleText}>{item.title}</Text>
          <View
            style={[
              cart[item.id] && styles.paddingToTheCartValueBtn,
              styles.cartButtonContainer,
            ]}
          >
            {cart[item.id] && (
              <Pressable
                style={styles.cartButton}
                onPress={() => {
                  removeFromCart(item);
                }}
              >
                <PlusIcon name="minus" size={12} color="white" />
              </Pressable>
            )}
            {cart[item.id] && (
              <Text style={styles.cartItemCount}>{cart[item.id]}</Text>
            )}
            <Pressable
              style={styles.cartButton}
              onPress={() => {
                addToCart(item);
              }}
            >
              <PlusIcon name="plus" size={12} color="white" />
            </Pressable>
          </View>
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
  paddingToTheCartValueBtn: {
    paddingHorizontal: 10,
  },
  flexOne: {
    flex: 1,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  favButton: {
    position: "absolute",
    left: 5,
    top: 5,
    zIndex: 5,
    padding: 10,
  },
  padding: {
    padding: 10,
  },
  cartButtonContainer: {
    position: "absolute",
    right: 10,
    top: 10,
    minWidth: 24,
    backgroundColor: "#2A4BA0",
    height: 24,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  cartButton: {
    backgroundColor: "#2A4BA0",
    color: "#FF8181",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },
  cartItemCount: {
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    marginHorizontal: 5,
    borderRightColor: "white",
    borderLeftColor: "white",
    color: "white",
  },
});
