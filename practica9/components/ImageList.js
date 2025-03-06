import React from "react";
import { FlatList, Image } from "react-native";

const ImageList = ({ images }) => {
  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={{ width: 100, height: 100 }} />
      )}
    />
  );
};

export default ImageList;