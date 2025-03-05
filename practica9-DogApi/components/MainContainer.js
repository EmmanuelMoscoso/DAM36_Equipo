import React from 'react';
import { View, StatusBar } from 'react-native';
import DynamicList from './DynamicList.js';
import Navbar from './NavBar.js';
import styles from '../styles/styles.js';
import DogSearch from './input.js';

export default function MainContainer() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Navbar/>
        <DogSearch/>
        <DynamicList />
      </View>
    );
  }