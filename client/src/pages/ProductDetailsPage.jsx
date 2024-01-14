import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Rating } from "react-native-ratings";
import ProductImgCarousel from "../components/ProductImgCarousel";

const ProductDetailsPage = ({ route, navigation }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 52,
          paddingBottom: 30,
          paddingHorizontal: 20,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#F8F9FB",
            height: 30,
            width: 30,
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContents: "center",
            alignContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon
            name="chevron-back"
            size={15}
            color="black"
            style={{ marginTop: 7 }}
          />
        </Pressable>
        <Pressable>
          <View>
            <Icon name="cart-outline" size={30} color="black" />
            <View
              style={{
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
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 14 }}
              >
                {3}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 50, color: "#1E222B", lineHeight: 62.5 }}>
          {item.brand}
        </Text>
        <Text style={{ fontSize: 50, fontWeight: "bold", color: "#1E222B" }}>
          {item.title}
        </Text>
        <View
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginTop: 10,
          }}
        >
          <Rating imageSize={16} readonly startingValue={item.rating} />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <ProductImgCarousel images={item.images} />
      </View>
    </View>
  );
};

export default ProductDetailsPage;

const styles = StyleSheet.create({});
