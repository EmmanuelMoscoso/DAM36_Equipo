import React from 'react';
import { View, StatusBar } from 'react-native';
import DynamicList from '../components/DynamicList.js';
import Navbar from '../components/NavBar.js';
import styles from '../styles/styles.js';

const CatalogView = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Navbar />
      <DynamicList />
    </View>
  );
}

export default CatalogView;
