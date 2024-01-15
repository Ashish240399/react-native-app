import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/getAllProducts";
import Search from "../../components/Search";
import ProductCards from "../../components/ProductCards";
import Icon from "react-native-vector-icons/Ionicons";
import DownArrow from "react-native-vector-icons/EvilIcons";
import Banner from "../../components/Banner";
import CartContext from "../../context/cart/CartContext";
import ProductContext from "../../context/products/ProductContext";
const screenWidth = Dimensions.get("window").width;
const Home = ({ navigation }) => {
  const { product, getProduct } = useContext(ProductContext);

  const [addToFav, setAddToFav] = useState([]);
  const { totalItemToTheCart } = useContext(CartContext);
  const bannerArr = [
    {
      offPercent: "50%",
      firstOrder: "03",
      color: "#F9B023",
    },
    {
      offPercent: "30%",
      firstOrder: "01",
      color: "#e4ddcb",
    },
  ];
  useEffect(() => {
    getProducts();
  }, []);

  //Calling All Products API
  async function getProducts() {
    try {
      const res = await getAllProducts();
      const products = res.products;
      getProduct(products);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.homeContainer}>
      <View style={styles.headContainer}>
        <Text style={styles.headText}>Hey, Ashish</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Cart");
          }}
          style={{ position: "absolute", right: 26, top: 50 }}
        >
          <View>
            <Icon name="cart-outline" size={30} color="white" />
            {totalItemToTheCart != 0 && (
              <View style={styles.cartIconStyle}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 14 }}
                >
                  {totalItemToTheCart}
                </Text>
              </View>
            )}
          </View>
        </Pressable>
        <Search />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <View>
            <Text style={styles.textStyleHeading}>Delivery to</Text>
            <Text style={styles.textStyleContent}>
              Green Way 3000, Sylhet
              <DownArrow name="chevron-down" size={20} />
            </Text>
          </View>
          <View>
            <Text style={styles.textStyleHeading}>Within</Text>
            <Text style={styles.textStyleContent}>
              1 Hour
              <DownArrow name="chevron-down" size={20} />
            </Text>
          </View>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <ScrollView style={styles.scrollViewStyle} horizontal>
          {bannerArr.map((banner, id) => (
            <View style={styles.bannerStyle} key={id}>
              <Banner banner={banner} />
            </View>
          ))}
        </ScrollView>

        <View style={styles.viewStyle}>
          <Text style={styles.recomendedText}>Recommended</Text>
          <View style={styles.productContainer}>
            {product &&
              product.map((item, id) => (
                <View key={id}>
                  <ProductCards
                    item={item}
                    style={styles.productCardStyle}
                    setAddToFav={setAddToFav}
                    addToFav={addToFav}
                    navigation={navigation}
                  />
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  headText: {
    fontSize: 24,
    color: "white",
    marginBottom: 30,
  },
  headContainer: {
    backgroundColor: "#2A4BA0",
    paddingTop: 52,
    padding: 20,
  },
  textStyleHeading: {
    color: "#F8F9FB",
    textTransform: "uppercase",
    opacity: 0.3,
    fontSize: 11,
  },
  textStyleContent: {
    color: "#F8F9FB",
    fontSize: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  recomendedText: {
    color: "#1E222B",
    fontSize: 30,
    marginBottom: 30,
  },
  cartIconStyle: {
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
  scrollViewStyle: {
    height: 130,
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
  },
  bannerStyle: {
    marginStart: 20,
    marginEnd: 20,
    height: 130,
  },
  viewStyle: {
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: 30,
  },
  productContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCardStyle: {
    width: screenWidth / 2 - 25,
    marginRight: 10,
    marginBottom: 10,
  },
});
