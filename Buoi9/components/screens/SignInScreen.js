import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../context/AuthContext";

const SignInScreen = ({ navigation }) => {
  const { login, isLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.replace("MainTabs");
    } else {
      setLoading(false);
    }
  }, [isLoggedIn, navigation]);

  const handleLogin = async () => {
    await login();
    navigation.replace("MainTabs");
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email here!"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password here!"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>For got password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Icon name="google" size={20} color="#DB4437" />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Icon name="facebook" size={20} color="#fff" />
          <Text style={[styles.socialButtonText, { color: "#fff" }]}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
        <Text style={styles.signUpText}>
          Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    color: "#333",
  },
  forgotPassword: { textAlign: "right", color: "#FFA500", fontSize: 14, marginBottom: 20 },
  loginButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  orText: { textAlign: "center", fontSize: 16, color: "#666", marginVertical: 10 },
  socialButtonsContainer: { flexDirection: "row", justifyContent: "center", marginTop: 10 },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  googleButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  facebookButton: {
    backgroundColor: "#3b5998",
  },
  socialButtonText: { fontSize: 16, fontWeight: "bold", marginLeft: 10 },
  signUpText: { textAlign: "center", marginTop: 20, fontSize: 16 },
  signUpLink: { color: "#FFA500", fontWeight: "bold" },
});

export default SignInScreen;
