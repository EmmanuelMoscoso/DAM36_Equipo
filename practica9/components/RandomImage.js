import React from "react";
import { View, Image, Button } from "react-native";

const RandomImage = ({ randomImage, fetchRandomImage }) => {
  return (
    <View>
      {randomImage && <Image source={{ uri: randomImage }} style={{ width: 100, height: 100 }} />}
      <Button title="Perro Random" onPress={fetchRandomImage} />
    </View>
  );
};

export default RandomImage;