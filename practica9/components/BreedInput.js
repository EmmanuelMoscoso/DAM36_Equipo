import React from "react";
import { View, TextInput, Button } from "react-native";

const BreedInput = ({ breed, setBreed, fetchBreedImages }) => {
  return (
    <View>
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