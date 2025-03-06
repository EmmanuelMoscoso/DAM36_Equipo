import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import BreedInput from "./BreedInput";
import ImageList from "./ImageList";
import RandomImage from "./RandomImage";
import { fetchBreedImages, fetchRandomImage } from "./api";
import styles from "../styles/styles";

const DogImageApp = () => {
  const [breed, setBreed] = useState("");
  const [images, setImages] = useState([]);
  const [randomImage, setRandomImage] = useState(null);

  const handleFetchBreedImages = async () => {
    const images = await fetchBreedImages(breed);
    setImages(images);
  };

  const handleFetchRandomImage = async () => {
    const image = await fetchRandomImage();
    setRandomImage(image);
  };

  return (
    <View style={styles.container}>
      <BreedInput breed={breed} setBreed={setBreed} fetchBreedImages={handleFetchBreedImages} />
      <ImageList images={images} />
      <RandomImage randomImage={randomImage} fetchRandomImage={handleFetchRandomImage} />
    </View>
  );
};

export default DogImageApp;
