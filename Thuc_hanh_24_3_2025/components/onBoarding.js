import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://s3-alpha-sig.figma.com/img/65e9/1e96/4e8f13cbdb37604e351d37d72a1eb837?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T0Msp6sBQtHsUOM3Gx7rxGTM720OKlvNP47agOrL22UE7ebrRTi9wT1bffX2ORC-2pNSLlOqne2ehoQ2zxMZwyuPTlPhxxdNRyMxUj29sBTUFPNW6teCSH7te6mjZ4qn5uKIHPDL7Nsh7LcHSGulVAR~j3KfxteH6Ze3K0t0sSUNO2MEkZRpOtuclkYetomUKAQQVXl~0RYkENccONCTvf9308zuY-cwhVYzUkzRl3-GKwQxnR7vQ-Z3MK5G0z4DdQiX9fsk-e0kw4Ex4crxlfmx53nmjc2uvPAuvmHM2JhW9rVrw~uRHkcasMomkY32S0bkAPyKIUhFv3J8PzlOGA__"}} style={styles.image} />
      <Text style={styles.title}>Welcome to our store</Text>
      <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
  image: { width: "100%", height: "100%",position:"absolute",left:0,right:0,top:0,bottom:0 },
  title: { fontSize: 30, fontWeight: "bold", marginVertical: 10,color:"white" },
  subtitle: { fontSize: 16, color: "gray", textAlign: "center", paddingHorizontal: 20 },
  button: { backgroundColor: "#6DBE45", padding: 15, borderRadius: 10, marginTop: 20 },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default OnboardingScreen;
