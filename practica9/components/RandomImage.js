import React from "react";
import { View, Image, Button } from "react-native";
import styles from "../styles/styles";

const RandomImage = ({ randomImage, fetchRandomImage }) => {
  return (
    <View style={styles.randomBox}>
      <View style={styles.randomButton}>
      <Button title="Perro Random" onPress={fetchRandomImage} color="#fff"/>
      </View>
      {randomImage && <Image source={{ uri: randomImage }} style={{ width: '70%', height: '50%' , borderRadius: 15}} />}
    </View>
  );
};

export default RandomImage;