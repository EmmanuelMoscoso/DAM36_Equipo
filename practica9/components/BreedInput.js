import React from "react";
import { View, TextInput, Button } from "react-native";
import styles from "../styles/styles";

const BreedInput = ({ breed, setBreed, fetchBreedImages }) => {
  return (
    <View style={styles.searchBox}>
      <TextInput
        value={breed}
        onChangeText={setBreed}
        placeholder="Ingresa una raza de perro"
      />
      <Button title="Buscar" onPress={fetchBreedImages} />
    </View>
  );
};

export default BreedInput;