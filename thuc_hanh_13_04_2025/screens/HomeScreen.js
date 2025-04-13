// screens/HomeScreen.js
import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Data for categories and popular items
const categories = [
  { name: 'PIZZA', icon: { uri: "https://media.istockphoto.com/id/1413249810/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-vector-mi%E1%BA%BFng-pizza.jpg?s=612x612&w=0&k=20&c=iLehVltFPAFcfydZpqKxCN5p3n0JwrGHuDAMGAxQFU0=" } },
  { name: 'BURGER', icon: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PwBboeb3ig7O1Ce5rDXw2MZl7XW85d1odQ&s" } },
  { name: 'DRINK', icon: { uri: "https://thumbs.dreamstime.com/b/%C3%ADcone-do-copo-de-caf%C3%A9-107816251.jpg" } },
  { name: 'RICI', icon: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1k29y_oTa5gjkKQm7XY6Hp9osdM6wrgjrw&s" } },
];

const popularItems = [
  { id: '1', name: 'BURGER', image: { uri: "https://burgerking.vn/media/seo-image/imgpsh_fullsize_anim.png" }, rating: '4.9' },
  { id: '2', name: 'PIZZA', image: { uri: "https://burgerking.vn/media/seo-image/imgpsh_fullsize_anim.png" }, rating: '4.8' },
];

const HomeScreen = () => {

 const [cartData, setCartData] = useState([]);

useEffect(() => {
  const fetchCart = async () => {
    try {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) {
        setCartData(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Lỗi lấy giỏ hàng:", error);
    }
  };

  fetchCart();
}, []);


  const navigation =useNavigation()
  return (
    
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPq_GdHrAfGdnr3cLDeagSc7X_twjR_6Cz9Q&s" }}
          style={styles.profileImage}
        />
        <View style={styles.locationContainer}>
          <Text style={styles.locationLabel}>Your Location</Text>
          <Text style={styles.location}>Savar, Dhaka</Text>
        </View>
        <Icon name="notifications" size={24} color="#333" style={styles.notificationIcon} />
      </View>



      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={24} color="#fff" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your food"
          placeholderTextColor="#fff"
        />
        <Icon name="tune" size={24} color="#fff" style={styles.tuneIcon} />
      </View>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Image source={category.icon} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Promotional Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-hGtgAqNO9bbYr8xMr_3_YFo9481mkhZOw&s" }}
          style={styles.bannerImage}
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>BURGER</Text>
          <Text style={styles.bannerSubtitle}>TODAY'S HOT OFFER</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
          </View>
        </View>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>10% OFF</Text>
        </View>
      </View>

      {/* Popular Items */}
      <View style={styles.popularHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
     <FlatList
  data={popularItems}
  horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.popularItem}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={item.image} style={styles.popularImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemRating}>⭐ {item.rating}</Text>
    </TouchableOpacity>
  )}
  keyExtractor={(item) => item.id}
/>

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
    height:140
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  locationContainer: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 12,
    color: '#888',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationIcon: {
    marginLeft: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
    borderRadius: 30,
    marginHorizontal: 20,
    marginTop: -20,
    paddingHorizontal: 15,
    elevation: 5,
    padding:10
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10,
  },
  tuneIcon: {
    marginLeft: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    color: '#333',
  },
  bannerContainer: {
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 20,
  },
  bannerOverlay: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 5,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#6C63FF',
    borderRadius: 20,
    padding: 5,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 14,
    color: '#6C63FF',
  },
  popularItem: {
    marginLeft: 20,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  popularImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemRating: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default HomeScreen;