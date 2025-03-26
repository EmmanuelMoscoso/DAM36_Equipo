import {View, Text, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';

const HomeView = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to the Vehicle Catalog</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Catalog')}
          >
            <Text style={styles.buttonText}>View Catalog</Text>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E5E5E5', // Light gray background
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#FFF', // White button
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3, // For Android shadow
    },
    buttonText: {
      color: '#000', // Black text
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default HomeView;