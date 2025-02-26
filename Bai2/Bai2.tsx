import React from "react";
import { Image, Text, StyleSheet, View, FlatList } from "react-native";

interface CardNotifiProps {
  title: string;
  content: string;
  datetime: string;
}

const Bai2 = () => {
  const data = [
    {
      title: "Thông báo 1",
      content: "Nội dung thông báo 1",
      datetime: "10:00",
    },
    {
      title: "Thông báo 2",
      content: "Nội dung thông báo 2",
      datetime: "11:00",
    },
    {
      title: "Thông báo 3",
      content: "Nội dung thông báo 3",
      datetime: "11:00",
    },
    {
      title: "Thông báo 4",
      content: "Nội dung thông báo 4",
      datetime: "11:00",
    },
  ];

  const renderItem = ({ item }: { item: CardNotifiProps }) => (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={require("../../assets/icon.png")} style={styles.icon} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
        <Text style={styles.datetime}>{item.datetime}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title} // Using item.title as the key
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    marginBottom: 5,
  },
  datetime: {
    fontSize: 12,
    color: "gray",
  },
});

export default Bai2;
