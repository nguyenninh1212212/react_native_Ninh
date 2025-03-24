import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const PhoneNumberScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your mobile number</Text>

      {/* Input nhập số điện thoại */}
      <View style={styles.inputContainer}>
      <Text>🚩</Text>
        <Text style={styles.countryCode}>+880</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Nút xác nhận */}
      <TouchableOpacity
        style={[styles.button, { opacity: phone.length > 0 ? 1 : 0.5 }]}
        disabled={phone.length === 0}
        onPress={() => navigation.navigate("Verification")}
      >
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    marginTop: 40,
  },
  backText: {
    fontSize: 30,
    color: "#333",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    marginBottom: 20,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    marginRight: 5,
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 50,
    right: 30,
    backgroundColor: "#6DBE45",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default PhoneNumberScreen;
