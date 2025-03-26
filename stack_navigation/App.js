import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './screens/HomeView.js';
import CatalogView from './screens/CatalogView.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeView" component={HomeView} />
       <Stack.Screen name="Catalog" component={CatalogView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
