import React, { useState } from "react";
import { Image, Dimensions, View, TouchableOpacity, Text } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const ProductImgCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const { width: viewportWidth } = Dimensions.get("window");

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <View>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={0}
        data={images}
        onChangeIndex={({ index }) => handleIndexChange(index)}
        renderItem={({ item }) => (
          <View style={{ width: viewportWidth, height: 300 }}>
            <Image
              source={{ uri: item }}
              style={{ width: "100%", height: 207 }}
              resizeMode="cover"
            />
          </View>
        )}
        renderAll={true}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "start",
          position: "absolute",
          top: 177,
          left: 20,
        }}
      >
        {images.map((_, i) => (
          <View
            style={{
              width: 15,
              height: 3,
              borderRadius: 20,
              backgroundColor: i === index ? "#F9B023" : "#e4e4e4",
              marginRight: 3,
            }}
          ></View>
        ))}
      </View>
    </View>
  );
};

export default ProductImgCarousel;
