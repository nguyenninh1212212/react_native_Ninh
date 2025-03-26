import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const categories = [
  { id: "1", name: "Pizza", image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/48a49653c8716457eb0b2f7eb3c7d74c/Derivates/8d83d9ed4567fa15456d8eec7557e60006a15576.jpg" },
  { id: "2", name: "Burgers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_teJYTdoQ5YSJNSXfHFTWzkvibUW2miasw&s" },
  { id: "3", name: "Steak", image: "https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4-500x500.jpg" },
];

const popularItems = [
  {
    id: "1",
    name: "Food 1",
    price: "1$",
    image: "https://www.allrecipes.com/thmb/EbqrYyFsDjrCM3KTN7fUHr78Z84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/57354-Beef-Pho-DDMFS-3x4-0615-49503be6698c4771a88400caa1c45795.jpg",
  },
  {
    id: "2",
    name: "Food 2",
    price: "3$",
    image: "https://www.allrecipes.com/thmb/EbqrYyFsDjrCM3KTN7fUHr78Z84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/57354-Beef-Pho-DDMFS-3x4-0615-49503be6698c4771a88400caa1c45795.jpg",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.headerTitle}>Explorer</Text>

      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <Icon name="map-pin" size={20} color="#666" style={styles.icon} />
        <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
        <Icon name="search" size={20} color="#666" />
      </View>

      {/* Danh mục */}
      <View style={styles.categoryHeader}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity>
          <Icon name="filter" size={20} color="orange" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Món ăn phổ biến */}
      <View style={styles.categoryHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={popularItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.foodCard}>
            <Image source={{ uri: item.image }} style={styles.foodImage} />
            <View style={{marginLeft:5}}>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
 <View style={styles.categoryHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
  data={popularItems}
  horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.foodCard}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      {/* Thêm nhãn giảm giá */}
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>10% OFF</Text>
      </View>
    </TouchableOpacity>
  )}
  keyExtractor={(item) => item.id}
/>

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", paddingHorizontal: 16 },
  headerTitle: { fontSize: 22, fontWeight: "bold", marginTop: 20 },

  // Thanh tìm kiếm
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  searchInput: { flex: 1, marginLeft: 10 },
  icon: { marginRight: 10 },

  // Danh mục
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  viewAll: { color: "orange" },

  // Danh mục item
  categoryItem: {
    alignItems: "center",
    marginRight: 15,
    marginTop: 10,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
  },

  // Card món ăn
  foodCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection:"row"
  },
  foodImage: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  foodName: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  foodPrice: { fontSize: 14, color: "gray" },

discountBadge: {
  position: "absolute",
  top: 5,
  right: 5,
  backgroundColor: "red",
  paddingVertical: 2,
  paddingHorizontal: 5,
  borderRadius: 5,
},
discountText: {
  color: "white",
  fontSize: 12,
  fontWeight: "bold",
},

});

export default HomeScreen;
