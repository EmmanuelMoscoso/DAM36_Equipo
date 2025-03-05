import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Image, Text } from 'react-native';

const DogSearch = () => {
    const [breed, setBreed] = useState('');
    const [images, setImages] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
            const data = await response.json();
            setImages(data.message);
        } catch (error) {
            console.error('Error fetching dog images:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter dog breed"
                value={breed}
                onChangeText={setBreed}
            />
            <Button title="Search" onPress={handleSearch} />
            <FlatList
                data={images}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});

export default DogSearch;