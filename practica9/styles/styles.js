import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f0f0",
    },
    navbar: {
        backgroundColor: '#000', 
        height: "11%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
      navTitle: {
        marginTop: 48,
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
      },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
    image: {
      width: "100%",
      height: 200,
      marginVertical: 10,
      borderRadius: 10,
    },
  });

  export default styles;