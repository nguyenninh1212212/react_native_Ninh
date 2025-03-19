import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const categories = [
  { id: "1", name: "Pizza", image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedFa8dG4gyrsQGyjTAiM-21nvWoIOp3y2BA&s" } },
  { id: "2", name: "Burgers", image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedFa8dG4gyrsQGyjTAiM-21nvWoIOp3y2BA&s" } },
  { id: "3", name: "Steak", image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedFa8dG4gyrsQGyjTAiM-21nvWoIOp3y2BA&s" } },
];

const popularItems = [
  { id: "1", name: "Food 1", price: "$1", image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedFa8dG4gyrsQGyjTAiM-21nvWoIOp3y2BA&s" } },
  { id: "2", name: "Food 2", price: "$3", image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedFa8dG4gyrsQGyjTAiM-21nvWoIOp3y2BA&s" } },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="location-outline" size={20} color="gray" />
        <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
        <Ionicons name="search" size={20} color="gray" />
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Top Categories</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
      />

      {/* Popular Items */}
      <View style={styles.popularHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popularItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.popularItem}>
            <Image source={item.image} style={styles.popularImage} />
            <Text style={styles.popularName}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20, 
    paddingVertical: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  categoryItem: {
    marginRight: 15,
    alignItems: "center",
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "500",
  },
  popularHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  viewAllText: {
    color: "#FF5733",
    fontWeight: "600",
  },
  popularItem: {
    marginRight: 15,
    backgroundColor: "#f3f3f3",
    padding: 10,
    borderRadius: 10,
    width: 150,
  },
  popularImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  popularName: {
    marginTop: 8,
    fontWeight: "bold",
  },
  popularPrice: {
    color: "#555",
  },
});
