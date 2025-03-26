import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import Icon from "react-native-vector-icons/Feather";

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Header màu xanh */}
      <View style={styles.header} />

      {/* Avatar */}
      <Image
        source={{
          uri: "https://www.fakepersongenerator.com/Face/female/female20151024138284210.jpg", // Thay bằng link ảnh thật
        }}
        style={styles.avatar}
      />

      {/* Thông tin cá nhân */}
      <Text style={styles.name}>Hung Nguyen</Text>
      <Text style={styles.role}>Mobile developer</Text>
      <Text style={styles.description}>
        I have above 5 years of experience in native mobile apps development, now I am learning React Native
      </Text>

      {/* Nút Sign Out */}
      <TouchableOpacity style={styles.signOutButton} onPress={logout}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

      {/* Thanh điều hướng */}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#f5f5f5" },
  
  // Header màu xanh
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#00AEEF",
  },

  // Avatar
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -50,
    borderWidth: 3,
    borderColor: "#fff",
  },

  // Thông tin cá nhân
  name: { fontSize: 20, fontWeight: "bold", marginTop: 10 },
  role: { color: "#00AEEF", fontSize: 16, marginBottom: 10 },
  description: { textAlign: "center", paddingHorizontal: 30, color: "gray" },

  // Nút Sign Out
  signOutButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  signOutText: { color: "#fff", fontWeight: "bold" },

  // Thanh điều hướng
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  tabItem: { alignItems: "center" },
  tabText: { fontSize: 12, color: "gray" },
  activeTabText: { fontSize: 12, color: "red" },
});

export default ProfileScreen;
