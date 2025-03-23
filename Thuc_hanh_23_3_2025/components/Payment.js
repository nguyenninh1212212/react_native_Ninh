import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SuccessScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Image
        source={{uri:"data:image/jpeg;base64,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"}}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Tiêu đề */}
      <Text style={styles.title}>Payment Success, Yayy!</Text>
      <Text style={styles.subtitle}>
        We will send order details and invoice to your contact no. and
        registered email
      </Text>

      {/* Nút Check Details */}
      <TouchableOpacity style={styles.checkDetails}>
        <Text style={styles.checkDetailsText}>Check Details</Text>
        <Ionicons name="arrow-forward" size={16} color="#3B82F6" />
      </TouchableOpacity>

      {/* Nút Download Invoice */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Invoice</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    color: "gray",
    fontSize: 14,
    marginBottom: 20,
  },
  checkDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkDetailsText: {
    color: "#3B82F6",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 4,
  },
  downloadButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
    borderRadius: 8,
  },
  downloadText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SuccessScreen;
