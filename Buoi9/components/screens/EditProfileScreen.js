import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("Nguyễn Văn A");
  const [email, setEmail] = useState("nguyenvana@example.com");

  return (
    <View style={styles.container}>
      <Text>Chỉnh sửa hồ sơ</Text>
      <TextInput
        style={styles.input}
        placeholder="Họ và tên"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Lưu" onPress={() => alert("Lưu thành công!")} />
      <Button title="Quay lại" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 8 },
});

export default EditProfileScreen;
