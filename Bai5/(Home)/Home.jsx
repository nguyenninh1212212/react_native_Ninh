import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native"; // ✅ Import đúng

const Home = () => {
  const data = [
    { text: "Green", background: "green", color: "white" },
    { text: "Blue", background: "blue", color: "white" },
    { text: "Brown", background: "brown", color: "white" },
    { text: "Yellow", background: "yellow", color: "white" },
    { text: "Red", background: "red", color: "white" },
    { text: "Black", background: "black", color: "white" },
  ];

  const [bg, setBg] = useState(""); // ✅ Sửa lỗi

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bg, justifyContent: "center" }}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.text} // ✅ Thêm key tránh lỗi React
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setBg(item.background)}>
              <View
                style={{
                  backgroundColor: item.background,
                  padding: 10,
                  margin: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: item.color, textAlign: "center" }}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
