import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const PaymentScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState("credit_card");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Nút Back */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Tiêu đề */}
        <Text style={styles.title}>Checkout 🏦</Text>
        <Text style={styles.subtitle}>Including GST (18%)</Text>

        {/* Giá tiền */}
        <Text style={styles.price}>₹ 1,527</Text>

        {/* Phương thức thanh toán */}
        <View style={styles.paymentMethods}>
          <TouchableOpacity
            style={[
              styles.paymentButton,
              selectedMethod === "credit_card" && styles.selectedPaymentButton,
            ]}
            onPress={() => setSelectedMethod("credit_card")}
          >
            <Text
              style={[
                styles.paymentText,
                selectedMethod === "credit_card" && styles.selectedPaymentText,
              ]}
            >
              💳 Credit Card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.paymentButton,
              selectedMethod === "apple_pay" && styles.selectedPaymentButtonGray,
            ]}
            onPress={() => setSelectedMethod("apple_pay")}
          >
            <Text style={styles.paymentText}> Apple Pay</Text>
          </TouchableOpacity>
        </View>

        {/* Form nhập thông tin thẻ */}
        <View style={styles.form}>
          {/* Số thẻ */}
          <View>
            <Text style={styles.label}>Card Number</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="5261 4141 0151 8472"
                keyboardType="numeric"
                style={styles.input}
              />
              <FontAwesome name="cc-mastercard" size={24} color="orange" />
            </View>
          </View>

          {/* Tên chủ thẻ */}
          <View>
            <Text style={styles.label}>Cardholder Name</Text>
            <TextInput
              placeholder="Christie Doe"
              style={styles.inputBox}
            />
          </View>

          {/* Ngày hết hạn & CVV */}
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Expiry Date</Text>
              <TextInput
                placeholder="06 / 2024"
                keyboardType="numeric"
                style={styles.inputBox}
              />
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>CVV / CVC</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="915"
                  keyboardType="numeric"
                  style={styles.input}
                />
                <MaterialIcons name="help-outline" size={20} color="gray" />
              </View>
            </View>
          </View>
        </View>

        {/* Mô tả */}
        <Text style={styles.description}>
          We will send you an order confirmation email after payment.
        </Text>

        {/* Nút thanh toán */}
        <TouchableOpacity style={styles.payButton}>
          <Ionicons name="lock-closed" size={20} color="white" />
          <Text style={styles.payButtonText}>Pay for the order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
  },
  paymentMethods: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 4,
    marginBottom: 20,
  },
  paymentButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  selectedPaymentButton: {
    backgroundColor: "#28a745",
  },
  selectedPaymentButtonGray: {
    backgroundColor: "#e0e0e0",
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedPaymentText: {
    color: "white",
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "gray",
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    marginRight: 8,
  },
  description: {
    textAlign: "center",
    color: "gray",
    fontSize: 14,
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: "#28a745",
    paddingVertical: 14,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  payButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default PaymentScreen;
