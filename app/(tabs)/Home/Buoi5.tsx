import CardTitle from "@/components/cardAction/CardTitle";
import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";

const Buoi5 = () => {
  const data = [
    { text: "Green", background: "green", color: "white" },
    { text: "Blue", background: "blue", color: "white" },
    { text: "Brown", background: "brown", color: "white" },
    { text: "Yellow", background: "yellow", color: "white" },
    { text: "Red", background: "red", color: "white" },
    { text: "Black", background: "black", color: "white" },
  ];

  const [bg, setBg] = useState<string>("");
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: bg, height: "100%" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CardTitle
              text={item.text}
              background={item.background}
              color={item.color}
              setBg={setBg}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Buoi5;
