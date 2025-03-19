import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { AuthContext } from "./AuthProvider";  

export default function LoginScreen() {
  const { login, user } = useContext(AuthContext);  
  const navigation = useNavigation(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 const onClick = async () => {
  try {
    const success = await login(username, password); 
    if (success) {
      navigation.replace("Main");
    } else {
      alert("Login failed! Please check your credentials.");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("An error occurred during login.");
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      <TouchableOpacity style={styles.signInButton} onPress={onClick}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.socialButtons}>
        {/* Google Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"}} style={styles.icon} />
          <Text>Google</Text>
        </TouchableOpacity>

        {/* Facebook Button */}
        <TouchableOpacity style={styles.facebookButton}>
          <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"}} style={styles.icon} />
          <Text style={styles.facebookText}>Facebook</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 24, backgroundColor: "#f7f7f7" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  label: { fontSize: 14, color: "#555", marginBottom: 5 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 12, marginBottom: 10, backgroundColor: "#fff" },
  signInButton: { backgroundColor: "#ff9900", paddingVertical: 14, borderRadius: 8, alignItems: "center", marginBottom: 20 },
  signInText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1877F2",
    padding: 12,
    borderRadius: 8,
  },
  facebookText: {
    color: "#fff",
    marginLeft: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
   socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
});
