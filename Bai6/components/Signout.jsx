import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../components/AuthProvider";
import { useNavigation } from "@react-navigation/native";

export default function AccountScreen() {
  const { logout,user } = useContext(AuthContext);
  const navigation = useNavigation();
  
  const handleSignOut = () => {
    logout();
    navigation.replace("Auth"); 
  };

  return (
    <View style={styles.container}>
      {/* Ảnh bìa */}
      <View style={styles.header} />

      {/* Thông tin người dùng */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user?.username}</Text>

        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development,
          now I am learning React Native
        </Text>

        {/* Nút Sign Out */}
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f7f7" },
  header: { height: 120, backgroundColor: "#00AEEF" },
  infoContainer: {
    alignItems: "center",
    marginTop: -40,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    elevation: 4,
  },
  name: { fontSize: 22, fontWeight: "bold", color: "#333" },
  role: { fontSize: 16, color: "#00AEEF", marginVertical: 5 },
  description: { fontSize: 14, color: "#666", textAlign: "center", marginBottom: 20 },
  signOutButton: {
    backgroundColor: "#FF9900",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signOutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
