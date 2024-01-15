import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Rating } from "react-native-ratings";
import ProductImgCarousel from "../components/ProductImgCarousel";
import Button from "../components/Button";
import CartContext from "../context/cart/CartContext";
import FavContext from "../context/favorites/FavContext";
import BackButton from "../components/BackButton";
import CartAddRemoveButton from "../components/CartAddRemoveButton";
import { ScrollView } from "react-native-gesture-handler";

const ProductDetailsPage = ({ route, navigation }) => {
  const { cart, addToCart, removeFromCart, totalItemToTheCart } =
    useContext(CartContext);
  const { fav, addToFav, removeFromFav } = useContext(FavContext);
  const { item } = route.params;

  function AddToCartButtonClicked() {
    addToCart(item);
  }

  function RemoveFromCart() {
    removeFromCart(item);
  }

  function ByNowButtonClicked() {
    console.log("ByNow");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
          <BackButton />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <View>
            <Icon name="cart-outline" size={30} color="black" />
            {totalItemToTheCart != 0 && (
              <View style={styles.cartCount}>
                <Text style={styles.cartCountText}>{totalItemToTheCart}</Text>
              </View>
            )}
          </View>
        </Pressable>
      </View>
      <ScrollView
        style={{
          flex: 1,
          paddingTop: 20,
        }}
      >
        <View style={styles.productInfo}>
          <Text style={styles.productBrand}>{item.brand}</Text>
          <Text style={styles.productTitle}>{item.title}</Text>
          <View style={styles.ratingContainer}>
            <Rating imageSize={16} readonly startingValue={item.rating} />
          </View>
        </View>

        <View style={styles.carouselContainer}>
          <ProductImgCarousel images={item.images} />
          <Pressable
            onPress={() => {
              if (fav.includes(item.id)) {
                removeFromFav(item.id);
              } else {
                addToFav(item.id);
              }
            }}
            style={styles.favIconContainer}
          >
            <Icon
              name="heart"
              size={22}
              color={fav.includes(item.id) ? "#FF8181" : "gray"}
            />
          </Pressable>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${item.price}</Text>
          <Text style={styles.discountText}>
            {item.discountPercentage}% OFF
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            {cart[item.id] ? (
              <CartAddRemoveButton
                addFn={AddToCartButtonClicked}
                removeFn={RemoveFromCart}
                value={cart[item.id]}
              />
            ) : (
              <Button
                title={"Add To Cart"}
                setFunction={AddToCartButtonClicked}
                bgColor={"white"}
                textColor={"#2A4BA0"}
              />
            )}
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title={"By Now"}
              setFunction={ByNowButtonClicked}
              bgColor={"#2A4BA0"}
              textColor={"white"}
            />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Details</Text>
          <Text style={styles.detailsText}>{item.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default ProductDetailsPage;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingHorizontal: 20,
  },
  pressable: {
    backgroundColor: "#F8F9FB",
    height: 30,
    width: 30,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContents: "center",
    alignContent: "center",
  },
  icon: {
    marginTop: 7,
  },
  cartCount: {
    height: 22,
    width: 22,
    borderRadius: 100,
    backgroundColor: "#F9B023",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    position: "absolute",
    top: -6,
    right: -6,
  },
  cartCountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  productInfo: {
    paddingHorizontal: 20,
  },
  productBrand: {
    fontSize: 50,
    color: "#1E222B",
    lineHeight: 62.5,
  },
  productTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#1E222B",
  },
  ratingContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  carouselContainer: {
    marginTop: 20,
  },
  favIconContainer: {
    position: "absolute",
    right: 15,
    top: 5,
    zIndex: 5,
    padding: 10,
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: "#2A4BA0",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  discountText: {
    backgroundColor: "#2A4BA0",
    borderRadius: 20,
    fontSize: 12,
    color: "#FAFBFD",
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 20,
  },
  buttonWrapper: {
    width: "45%",
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  detailsTitle: {
    color: "#1E222B",
    fontSize: 16,
    lineHeight: 24,
  },
  detailsText: {
    color: "#8891A5",
    lineHeight: 24,
    fontSize: 16,
    // fontWeight: 400,
  },
});
