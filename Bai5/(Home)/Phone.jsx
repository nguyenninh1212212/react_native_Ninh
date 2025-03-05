import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { useNavigation } from "@react-navigation/native"; 
  
  export default function Phone() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigation = useNavigation(); 
  
    const onPress = () => {
      if (phoneNumber.length !== 0 && !/^\d+$/.test(phoneNumber)) {
        alert("Số điện thoại không hợp lệ");

      } else {
        navigation.navigate("/Home"); // Đổi "/" thành tên màn hình

      }
    };
  
    const isValidPhone = phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing
        </Text>
  
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
  
        {phoneNumber.length > 0 && phoneNumber.length !== 10 && (
          <Text style={styles.errorText}>Số điện thoại phải có 10 ký tự</Text>
        )}
        {phoneNumber.length > 0 && !/^\d+$/.test(phoneNumber) && (
          <Text style={styles.errorText}>Số điện thoại chỉ được chứa số</Text>
        )}
  
        <TouchableOpacity
          style={[styles.button, isValidPhone ? styles.buttonActive : null]}
          onPress={onPress}
          disabled={!isValidPhone}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: "#666",
      marginBottom: 16,
    },
    input: {
      height: 40,
      borderBottomColor: "gray",
      borderBottomWidth: 1,
      width: "100%",
      paddingHorizontal: 8,
      marginBottom: 8,
    },
    errorText: {
      color: "red",
      fontSize: 12,
      marginBottom: 8,
    },
    button: {
      backgroundColor: "lightgray",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    buttonActive: {
      backgroundColor: "green",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
    },
  });
