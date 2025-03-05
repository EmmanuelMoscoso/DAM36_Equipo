import React, { useState} from "react";
import { View, Text, Image, FlatList, TextInput, Button, StyleSheet } from "react-native";
import styles from "../styles/styles";

const DogImageApp = () => {
  const [breed, setBreed] = useState("");
  const [images, setImages] = useState([]);
  const [randomImage, setRandomImage] = useState(null);

  const fetchBreedImages = async () => {
    if (!breed) return;
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`);
      const data = await response.json();
      setImages(data.message);
    } catch (error) {
      console.error("Error fetching breed images:", error);
    }
  };

  const fetchRandomImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setRandomImage(data.message);
    } catch (error) {
      console.error("Error fetching random image:", error);
    }
  };

  return (
    <View style={styles.container}>

        <Text style={styles.title}>Imagen aleatoria</Text>
        <Button title="Generar imagen aleatoria" onPress={fetchRandomImage} />
        {randomImage && <Image source={{ uri: randomImage }} style={styles.image} />}

        <Text style={styles.title}>Buscar por raza</Text>
        <TextInput
        style={styles.input}
        placeholder="Ingresa la raza"
        value={breed}
        onChangeText={setBreed}
        />
        <Button title="Buscar" onPress={fetchBreedImages} />
        <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
        />

      
    </View>
  );
};



export default DogImageApp;
