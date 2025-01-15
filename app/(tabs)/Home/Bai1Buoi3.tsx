import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonCustom from "../../../components/cardAction/ButtonCustom";
const Bai1Buoi2 = () => {
  const onOK = () => {
    console.log("OK");
  };
  return (
    <View >
      <ButtonCustom title="HELLO WORLD" onMyPress={onOK} />
    </View>
  );
};

export default Bai1Buoi2;


