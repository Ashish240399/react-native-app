import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import ProductCart from "../components/ProductCart";
import CartContext from "../context/cart/CartContext";
import ProductContext from "../context/products/ProductContext";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../components/Button";
import { ScrollView } from "react-native-gesture-handler";

const CartPage = ({ navigation }) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    totalItemToTheCart,
    totalCartCost,
    removeAllCartItem,
  } = useContext(CartContext);
  const { product } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let cartItemArr = [];
    console.log(cart);
    if (Object.keys(cart).length > 0) {
      for (let keys in cart) {
        cartItemArr.push(product[+keys - 1]);
      }
      setCartItems(cartItemArr);
    } else {
      setCartItems([]);
    }
  }, [cart, totalItemToTheCart]);
  console.log(cartItems);
  function checkout() {
    console.log("checkout");
    alert("Checkout Successful");
    removeAllCartItem();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
          <BackButton />
        </Pressable>
        <Text style={styles.cartText}>
          Shopping Cart {"(" + totalItemToTheCart + ")"}
        </Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView}>
          {cartItems.map((el, id) => (
            <View key={id}>
              <ProductCart
                item={el}
                addFn={addToCart}
                removeFn={removeFromCart}
                itemCount={cart[el.id]}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      {totalItemToTheCart != 0 ? (
        <View style={styles.checkoutContainer}>
          <View style={styles.checkoutRow}>
            <Text style={styles.checkoutText}>Subtotal</Text>
            <Text>${totalCartCost}</Text>
          </View>
          <View style={styles.checkoutRow}>
            <Text style={styles.checkoutText}>Delivery</Text>
            <Text>$2</Text>
          </View>
          <View style={styles.checkoutTotal}>
            <Text style={styles.checkoutText}>Total</Text>
            <Text>${totalCartCost + 2}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={"Proceed To Checkout"}
              setFunction={checkout}
              bgColor={"#2A4BA0"}
              textColor={"white"}
            />
          </View>
        </View>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("HomePage");
          }}
        >
          <Text style={styles.homeButton}>Go To Home</Text>
        </Pressable>
      )}
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
    justifyContent: "center",
    alignContent: "center",
  },
  cartText: {
    marginLeft: 30,
    fontSize: 16,
  },
  scrollViewContainer: {
    height: "60%",
  },
  scrollView: {
    height: "100%",
  },
  checkoutContainer: {
    padding: 20,
    position: "absolute",
    bottom: 10,
    width: "95%",
    backgroundColor: "#F8F9FB",
    marginLeft: "2.5%",
    borderRadius: 20,
  },
  checkoutRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  checkoutTotal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  checkoutText: {
    color: "#616A7D",
  },
  buttonContainer: {
    width: "100%",
  },
  homeButton: {
    marginLeft: "30%",
    backgroundColor: "#2A4BA0",
    width: 150,
    color: "white",
    padding: 10,
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
