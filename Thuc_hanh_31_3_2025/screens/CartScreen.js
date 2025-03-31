import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CartScreen = () => {
  const [quantity, setQuantity] = React.useState(2);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const burgers=[
   { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoBUl2L5VugaXVCjkVdRtNi8p_PIttRImgw&s"},
   { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoBUl2L5VugaXVCjkVdRtNi8p_PIttRImgw&s"},
   { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoBUl2L5VugaXVCjkVdRtNi8p_PIttRImgw&s"},

  ]

  return (
    <View style={styles.container}>
      {/* Header */}
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
      <View style={styles.cartItem}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://marketplace.canva.com/EAGFxyZYiOc/4/0/1600w/canva-%C4%91%E1%BB%8F-v%C3%A0ng-khuy%E1%BA%BFn-m%C3%A3i-burger-instagram-post-LgVGYsaAOgM.jpg" }}
            style={styles.itemImage}
          />
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>10% OFF</Text>
          </View>
        </View>
      {/*//===*/ }
      <View style={styles.containerTitle}>
      
        <View style={styles.itemDetails}>
         <View style={styles.burgerContainer}>
        {burgers.map(e=>
          <Image
            source={e.img}
            style={styles.itemBurger}
          />
        )}
       </View>
     <View style={{flexDirection:"row",alignItems:"center" ,justifyContent:"space-between",marginBottom:-50,marginTop:-50}}>
        <View style={{height:"100%",flexDirection:"column",justifyContent:"space-betwwen",gap:10}}>
          <Text style={styles.itemName}>BURGER</Text>
          <Text style={styles.itemRating}>⭐ 4.9 (3k+ Rating)</Text>
        </View>
       <View style={{
         flexDirection:"column",
         alignItems:"center"
       }}>
          <Text style={styles.itemPrice}>${28 * quantity}</Text>

          <View style={styles.quantityContainer}>
          
            <TouchableOpacity onPress={handleDecrease}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={handleIncrease}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
       </View>
        </View>
     </View>
      </View>

      {/* Delivery Address */}
      <View style={{flexDirection:"row",marginBottom:10 ,gap:10,justifyContent:"space-between"}}>
        <View style={styles.infoContainer}>
        <Icon name="location-on" size={24} color="#6C63FF" />
        <Text style={styles.infoText}>Delivery Address: Dhaka, Bangladesh</Text>
        </View>
         <Icon name="edit" size={30} color="white" style={{backgroundColor:"#a9a6ff",padding:10,borderRadius:10}} />
      </View>

      {/* Payment Method */}
      <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
        <View style={{flexDirection:"row"}}>
        <Icon name="credit-card" size={24} color="#6C63FF" />
        <Text style={styles.infoText}>Payment Method</Text>
        </View>
 <TouchableOpacity 
  style={{
    borderWidth: 2, 
    borderColor: '#6C63FF', 
    borderRadius: 15,  
    padding: 5,
  }}
>
  <Text style={styles.changeText}>Change</Text>
</TouchableOpacity>

      </View>

      {/* Checkout Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Checkout Summary</Text>
        <View style={styles.summaryRow}>
          <Text>Subtotal ({quantity})</Text>
          <Text>${28 * quantity}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Delivery Fee</Text>
          <Text>$6.20</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.totalText}>Payable Total</Text>
          <Text style={styles.totalText}>${(28 * quantity + 6.20).toFixed(2)}</Text>
        </View>
      </View>

      {/* Confirm Order Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartItem: {
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  itemImage: {
    width: '100%',
    height: 220,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    padding: 5,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
  },
  itemDetails: {
    padding: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemRating: {
    color: '#888',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"#a9a6ff"
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#c0eadb',
    paddingRight:10
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  changeText: {
    color: '#6C63FF',
    marginLeft: 'auto',
  },
  summaryContainer: {
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  totalText: {
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    width:"95%",
    alignSelf:"center"
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemBurger:{
    width:100,
    height:100,
    borderRadius:20,
       position:"relative",
    top:-70,
   
  },
  burgerContainer:{
    flexDirection:"row",
    gap:5,
    justifyContent:"center",
   
   
  },
  containerTitle:{
    position:"relative",
    top:-50,
    backgroundColor:"white",
    borderTopLeftRadius:10,
    borderTopRightRadius:10

  }
});

export default CartScreen;
