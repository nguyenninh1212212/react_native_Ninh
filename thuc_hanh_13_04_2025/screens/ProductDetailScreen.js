import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
const navigation=useNavigation()
  const addToCart = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      let cart = cartData ? JSON.parse(cartData) : [];

      const existingIndex = cart.findIndex(item => item.id === product.id);

      if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      Alert.alert('✅ Thành công', 'Đã thêm món vào giỏ hàng!');
    } catch (error) {
      console.error('Lỗi thêm vào giỏ hàng:', error);
      Alert.alert('❌ Lỗi', 'Không thể thêm vào giỏ hàng.');
    }
  };

 const removeFromCart = async () => {
  try {
    const cartData = await AsyncStorage.getItem('cart');
    let cart = cartData ? JSON.parse(cartData) : [];

    const updatedCart = cart.filter(item => item.id !== product.id);

    if (updatedCart.length === cart.length) {
      Alert.alert('⚠️ Thông báo', 'Sản phẩm chưa có trong giỏ hàng.');
      return;
    }

    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    Alert.alert('🗑️ Đã xoá', 'Đã xoá sản phẩm khỏi giỏ hàng.');
  } catch (error) {
    console.error('Lỗi xoá sản phẩm:', error);
    Alert.alert('❌ Lỗi', 'Không thể xoá sản phẩm khỏi giỏ hàng.');
  }
};


  return (
    <ScrollView contentContainerStyle={styles.container}>
      // <Image source={product.image} style={styles.image} />
<TouchableOpacity
  style={[styles.button, { backgroundColor: '#ccc', marginTop: 10 }]}
  onPress={() => navigation.navigate('Main')}
>
  <Text style={[styles.buttonText, { color: '#333' }]}>Về trang chủ</Text>
</TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.rating}>⭐ {product.rating} / 5.0</Text>
        <Text style={styles.price}>{product.price ? `1000000 đ` : 'Liên hệ'}</Text>
        <Text style={styles.description}>
          {product.description || 'Không có mô tả cho sản phẩm này.'}
        </Text>
        <TouchableOpacity
  style={[styles.button, { backgroundColor: '#FF4D4D', marginTop: 10 }]}
  onPress={removeFromCart}
>
  <Text style={styles.buttonText}>Xoá khỏi giỏ hàng</Text>
</TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 30,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  rating: {
    fontSize: 16,
    color: '#888',
    marginTop: 4,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
