import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Icon name="carrot" size={90} color="white" />
      <View>
      <Text style={styles.text}>Nectar</Text>
      <Text  style={styles.content}>online groceriet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#03c67f", justifyContent: "center", alignItems: "center" ,flexDirection:"row",gap:5},
  text: { fontSize: 60, color: "white", fontWeight: "bold" },
  content: { fontSize: 18, color: "white", fontWeight: "thin",letterSpacing:3 }

});

export default SplashScreen;
