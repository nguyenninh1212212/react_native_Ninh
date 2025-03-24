import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState("");

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your 4-digit code</Text>

      {/* Input nhập mã code */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={4}
          value={code}
          onChangeText={setCode}
        />
      </View>

      {/* Resend Code */}
      <TouchableOpacity>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>

      {/* Nút xác nhận */}
      <TouchableOpacity
        style={[styles.button, { opacity: code.length === 4 ? 1 : 0.5 }]}
        disabled={code.length < 4}
        onPress={() => alert("Verified!")}
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
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  input: {
    fontSize: 24,
    textAlign: "center",
    letterSpacing: 10,
    paddingVertical: 10,
  },
  resendText: {
    color: "#6DBE45",
    fontSize: 16,
    marginBottom: 30,
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

export default VerificationScreen;
