
import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

const Home = () => {
  const data = [
    { text: "Green", background: "green", color: "white" },
    { text: "Blue", background: "blue", color: "white" },
    { text: "Brown", background: "brown", color: "white" },
    { text: "Yellow", background: "yellow", color: "white" },
    { text: "Red", background: "red", color: "white" },
    { text: "Black", background: "black", color: "white" },
  ];

  const [bg, setBg] = useState("");
  return (
    <SafeAreaView style={{ backgroundColor: bg }}>
      <View>
        <FlatList
          data={data}
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
