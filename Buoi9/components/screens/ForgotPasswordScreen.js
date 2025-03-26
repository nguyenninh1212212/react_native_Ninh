import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text>Quên mật khẩu</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập email của bạn"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Gửi yêu cầu" onPress={() => alert("Yêu cầu đặt lại mật khẩu đã được gửi!")} />
      <Button title="Quay lại Đăng nhập" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 8 },
});

export default ForgotPasswordScreen;
