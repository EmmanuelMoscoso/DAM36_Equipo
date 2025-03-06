import React, {useState, useEffect} from "react";
import { FlatList, Image } from "react-native";
import styles from "../styles/styles";


const ImageList = ({ images }) => {
  const [numColumns, setnumColumns] = useState(3);
  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => item}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={{ width: 100, height: 100 , margin: 10, borderRadius: 10}} />
      )}
      numColumns={3}
    />
  );
};

export default ImageList;