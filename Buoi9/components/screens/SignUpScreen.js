import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>Đăng ký</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Đăng ký" onPress={() => alert("Tạo tài khoản thành công!")} />
      <Button title="Quay lại Đăng nhập" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 8 },
});

export default SignUpScreen;
