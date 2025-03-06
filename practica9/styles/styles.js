import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f0f0",
      height: "100%",
      width: '100%'
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
    box: {
      paddingTop: '10%',
      borderRadius: 5,
      width: "95%",
      alignSelf: "center",
      alignItems: "center",
      height: "100%",
    },
    searchBox: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      width: "60%",
      marginBottom: '3%',
    },
    randomBox: {
      borderRadius: 5,
      width: "95%",
      height: "50%",
      alignSelf: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    randomButton: {
      backgroundColor: '#ffb703',
      borderRadius: 5,
      margin: '5%',
    },
    list: {
      marginTop: 10,
      width: "100%",
      alignSelf: "center",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-around",
    },
  });

  export default styles;