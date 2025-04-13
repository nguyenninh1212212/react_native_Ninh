import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      // Check if user exists in AsyncStorage
      const storedUser = await AsyncStorage.getItem('user');
      if (!storedUser) {
        Alert.alert('Lỗi', 'Chưa có tài khoản! Dùng tài khoản mặc định.');
        return;
      }

      const user = JSON.parse(storedUser);
      if (user.username === username && user.password === password) {
        // Log in the user and navigate
        login(user);
        navigation.replace('Main'); // Replace navigation to the Main screen
      } else {
        Alert.alert('Lỗi', 'Sai username hoặc password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Tạo user mặc định
  const createDefaultUser = async () => {
    try {
      const defaultUser = { username: 'admin', password: '123456' };
      await AsyncStorage.setItem('user', JSON.stringify(defaultUser));
      Alert.alert('Tạo user mặc định thành công');
    } catch (error) {
      console.error('Error creating default user', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
      <View style={{ marginTop: 10 }}>
        <Button title="Tạo tài khoản mặc định" onPress={createDefaultUser} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;
