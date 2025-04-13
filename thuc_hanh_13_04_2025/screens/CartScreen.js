import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) {
          setCartData(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error('Lỗi lấy giỏ hàng:', error);
      }
    };

    fetchCart();
  }, []);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Assuming each item in the cart has a price (example: $28)
  const itemPrice = 28;
  const deliveryFee = 0;

  const totalPrice = (itemPrice * quantity + deliveryFee).toFixed(2);

  const handleRemoveItem = async (indexToRemove) => {
  try {
    const updatedCart = cartData.filter((_, index) => index !== indexToRemove);
    setCartData(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  } catch (error) {
    console.error('Lỗi khi xoá sản phẩm:', error);
  }
};


  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={{ paddingHorizontal: 20, marginBottom: 10 }}>
        🛒 Số sản phẩm trong giỏ: {cartData.length}
      </Text>

      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Shopping Cart</Text>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Cart Item */}
      {cartData.length > 0 ? (
        cartData.map((item, index) => (
         <View key={index} style={styles.cartItem}>
  <View style={styles.imageContainer}>
    <Image source={{ uri: item.image }} style={styles.itemImage} />
    <View style={styles.discountBadge}>
      <Text style={styles.discountText}>10% OFF</Text>
    </View>
  </View>

  <View style={styles.itemDetails}>
    <Text style={styles.itemName}>{item.name}</Text>
    <Text style={styles.itemRating}>⭐ {item.rating} (3k+ Rating)</Text>
    <Text style={styles.itemPrice}>${itemPrice * quantity}</Text>

    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={handleDecrease}>
        <Text style={styles.quantityButton}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity onPress={handleIncrease}>
        <Text style={styles.quantityButton}>+</Text>
      </TouchableOpacity>
    </View>

    {/* Nút xoá sản phẩm */}
    <TouchableOpacity onPress={() => handleRemoveItem(index)} style={styles.removeButton}>
      <Text style={styles.removeButtonText}>🗑️ Xoá</Text>
    </TouchableOpacity>
  </View>
</View>

        ))
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      )}

      {/* Delivery Address */}
      <View style={styles.infoContainer}>
        <Icon name="location-on" size={24} color="#6C63FF" />
        <Text style={styles.infoText}>Delivery Address: Dhaka, Bangladesh</Text>
        <Icon name="edit" size={30} color="white" style={styles.editIcon} />
      </View>

      {/* Payment Method */}
      <View style={styles.infoContainer}>
        <Icon name="credit-card" size={24} color="#6C63FF" />
        <Text style={styles.infoText}>Payment Method</Text>
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Checkout Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Checkout Summary</Text>
        <View style={styles.summaryRow}>
          <Text>Subtotal ({quantity})</Text>
          <Text>${itemPrice * quantity}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Delivery Fee</Text>
          <Text>${deliveryFee}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.totalText}>Payable Total</Text>
          <Text style={styles.totalText}>${totalPrice}</Text>
        </View>
      </View>

      {/* Confirm Order Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FAFBD6',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF6347',
    borderRadius: 10,
    padding: 5,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemRating: {
    fontSize: 14,
    color: '#888',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    fontSize: 20,
    color: '#6C63FF',
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  infoText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  editIcon: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 10,
  },
  changeButton: {
    borderWidth: 2,
    borderColor: '#6C63FF',
    borderRadius: 15,
    padding: 5,
  },
  changeText: {
    fontSize: 14,
    color: '#6C63FF',
  },
  summaryContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  confirmButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  removeButton: {
  marginTop: 10,
  backgroundColor: '#FF6347',
  padding: 8,
  borderRadius: 8,
  alignSelf: 'flex-start',
},
removeButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},

});

export default CartScreen;
