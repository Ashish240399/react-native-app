import {
  Button,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/getAllProducts";
import Search from "../../components/Search";
import ProductCards from "../../components/ProductCards";

const Home = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;
  const [product, setProduct] = useState();
  const [addToCart, setAddToCart] = useState({});
  const [addToFav, setAddToFav] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  //Calling All Products API
  async function getProducts() {
    try {
      const res = await getAllProducts();
      const products = res.products;
      setProduct(products);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.homeContainer}>
      <View style={styles.headContainer}>
        <Text style={styles.headText}>Hey, Ashish</Text>
        <Search />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <View>
            <Text style={styles.textStyleHeading}>Delivery to</Text>
            <Text style={styles.textStyleContent}>Green Way 3000, Sylhet</Text>
          </View>
          <View>
            <Text style={styles.textStyleHeading}>Within</Text>
            <Text style={styles.textStyleContent}>1 Hour</Text>
          </View>
        </View>
      </View>
      {/* ------------------Recommended Section------------------------ */}
      <View style={{ flex: 1, paddingLeft: 20, paddingRight: 10 }}>
        <Text style={styles.recomendedText}>Recommended</Text>
        {product && (
          <FlatList
            data={product}
            keyExtractor={(item) => item.id.toString()} // Replace 'id' with the unique key in your data
            renderItem={({ item }) => (
              // Replace this with your product component
              <ProductCards
                item={item}
                style={{
                  width: screenWidth / 2 - 25,
                  marginRight: 10,
                  marginBottom: 10,
                }}
                setAddToCart={setAddToCart}
                addToCart={addToCart}
                setAddToFav={setAddToFav}
                addToFav={addToFav}
              />
            )}
            numColumns={2}
          />
        )}
      </View>
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
  },
  recomendedText: {
    color: "#1E222B",
    fontSize: 30,
  },
});
